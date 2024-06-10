import { Image, ImageProps } from "@chakra-ui/react";
import bullsEye from "../assets/bulls-eye.jpeg";
import thumbsUp from "../assets/meh.jpeg";
import meh from "../assets/thumbs-up.jpeg";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: {
      src: meh,
      alt: "meh",
    },
    4: {
      src: thumbsUp,
      alt: "recommended",
    },
    5: {
      src: bullsEye,
      alt: "exceptional",
    },
  };

  return <Image {...emojiMap[rating]} />;
};

export default Emoji;
