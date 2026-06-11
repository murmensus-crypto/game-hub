
import React from 'react'
import bullsEye from "../assets/bulls-eye.webp"
import meh from "../assets/meh.webp"
import thumbUps from "../assets/thumbs-up.webp"
import { Image, ImageProps } from '@chakra-ui/react';



interface Props{
  rating: number;  

}

const Emoji = ({rating}: Props) => {



    if (rating < 3) return null;

    const emojiMap: Record<3 | 4 | 5, ImageProps> = {
  3: { src: meh, alt: "meh" , boxSize: "25px", marginLeft: 2},
  4: { src: thumbUps, alt: "thumbs-up", boxSize: "25px", marginLeft: 2 },
  5: { src: bullsEye, alt: "bulls-eye", boxSize: "35px", marginLeft: 2 }
};

const emoji = emojiMap[rating as 3 | 4 | 5];
if (!emoji) return null;
  return (
    <Image {...emoji} marginTop={2} marginLeft={2} />
  )
}

export default Emoji