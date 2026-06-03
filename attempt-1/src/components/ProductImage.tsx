import { AspectRatio } from "@/components/ui/aspect-ratio"

type ProductImageProps = {
    src: string;
    alt: string;
}

export function ProductImage({src, alt}: ProductImageProps) {
    return (
        <div className="relative w-full overflow-hidden rounded-lg">
            <AspectRatio ratio={16 / 9} className="rounded-lg bg-muted">
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover rounded-lg dark:brightness-20"
                />
            </AspectRatio>
        </div>
    )
}