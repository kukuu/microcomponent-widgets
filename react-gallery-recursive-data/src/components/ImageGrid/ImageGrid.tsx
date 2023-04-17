import styles from './ImageGrid.module.css';
import React from 'react';
import { useState, useEffect } from 'react';

import { Block, BlockId, BlockType, getBlocks } from '../../blocks';
import { useGetBlocks } from '../../blocks';
import { InfoPanel, InfoPanelProps } from '../InfoPanel/InfoPanel';
type ImageType = {
  id: string;
  type: BlockType;
  options: {
    url: string;
    align: string;
    width: string;
  };
  children: [];
  data: {
    description: string;
    width: number;
    height: number;
    createdAt: string;
  };
};

function getImageBlocks(blocks: Block) {
  let images: any = [];
  for (const [k, v] of Object.entries(blocks)) {
    if (k == 'children') {
      let blocks = v as Block[];
      if (v.length > 0) {
        blocks.forEach((element: any) => {
          images = images.concat(getImageBlocks(element));
        });
      }
    }
    if (v == 'Image') {
      images.push(blocks);
    }
  }
  // console.log(images);

  return images;
}

type ImageGridProps = {
  data?: Block;
};

export const ImageGrid = (props: ImageGridProps) => {
  const { data, isLoading, error } = useGetBlocks();
  const [selectedImageId, setSelectedImageId] = useState<string | null>(null);

  const [selectedImageBlock, setSelectedImageBlock] =
    useState<InfoPanelProps | null>(null);
  const [blockId, setBlockId] = useState('');

  useEffect(() => {
    const currentUrl = window.location.href;
    const blockIdMatch = currentUrl.match(/\/(\w+)$/);
    const newBlockId = blockIdMatch?.[1] ?? '';
    setSelectedImageId(newBlockId);
    setBlockId(newBlockId);
  }, []);

  if (isLoading) {
    return (
      <span>
        Loading... <div className={styles.spinner}></div>
      </span>
    );
  }


  if (data) {
    // console.log(data);
    const imageBlocks = getImageBlocks(data);
    console.log(imageBlocks);
    return (
      <>
        <div className={styles.imageContainer}>
          <div className={styles.imageGrid}>
            {imageBlocks &&
              imageBlocks.map((block: any) => {
                const isSelected = block.id === selectedImageId;
                return (
                  <div
                    className={`${styles.imageGridItem} ${
                      isSelected ? styles.selectedImage : ''
                    }`}
                    onClick={() => {
                      setSelectedImageId(block.id);
                      const imageBlock = imageBlocks.find(
                        (imageBlock: any) => imageBlock.id === block.id
                      );
                      const imageBlockProps = {
                        id: imageBlock.id,
                        description: imageBlock.data.description,
                        dimensions: `${imageBlock.data.width} x ${imageBlock.data.height}`,
                        createdAt: imageBlock.data.createdAt,
                      };
                      setSelectedImageBlock(imageBlockProps);
                      window.open(`http://localhost:3000/${selectedImageId}`);
                      // window.location.href = `http://localhost:3000/${selectedImageId}`;
                    }}
                  >
                    <img
                      src={block.options.url}
                      alt={block.data.description}
                      className={styles.image}
                    />
                  </div>
                );
              })}
          </div>
        </div>
        <InfoPanel {...selectedImageBlock} />
      </>
    );
  }
};
