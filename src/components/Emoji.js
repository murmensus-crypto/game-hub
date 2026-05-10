import { jsx as _jsx } from "react/jsx-runtime";
import bullsEye from "../assets/bulls-eye.webp";
import meh from "../assets/meh.webp";
import thumbUps from "../assets/thumbs-up.webp";
import { Image } from '@chakra-ui/react';
const Emoji = ({ rating }) => {
    if (rating < 3)
        return null;
    const emojiMap = {
        3: { src: meh, alt: "meh", boxSize: "25px", marginLeft: 2 },
        4: { src: thumbUps, alt: "thumbs-up", boxSize: "25px", marginLeft: 2 },
        5: { src: bullsEye, alt: "bulls-eye", boxSize: "35px", marginLeft: 2 }
    };
    const emoji = emojiMap[rating];
    if (!emoji)
        return null;
    return (_jsx(Image, { ...emoji, marginTop: 2, marginLeft: 2 }));
};
export default Emoji;
