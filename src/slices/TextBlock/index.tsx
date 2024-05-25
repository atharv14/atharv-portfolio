import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TextBlock`.
 */
export type TextBlockProps = SliceComponentProps<Content.TextBlockSlice>;

/**
 * Component for "TextBlock" Slices.
 */
const TextBlock = ({ slice }: TextBlockProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
    <div className="max-w-prose">
      <PrismicRichText field={slice.primary.text} />
    </div>
    
    <Button
        linkField={slice.primary.button_link}
        label={slice.primary.button_text}
      />

  </Bounded>
  );
};

export default TextBlock;
