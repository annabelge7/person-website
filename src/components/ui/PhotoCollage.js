import Image from 'next/image'
import PlaceholderPhoto from '@/components/ui/PlaceholderPhoto'

export default function PhotoCollage({
  backLabel,
  frontLabel,
  backSrc,
  frontSrc,
}) {
  return (
    <div className="ml-auto flex w-full max-w-[420px] flex-col gap-8 sm:max-w-[480px]">
      <div className="w-[85%] -rotate-2 self-start overflow-hidden rounded-xl border-4 border-paper shadow-[0_18px_40px_-16px_rgba(33,29,24,0.35)]">
        <div className="relative aspect-[4/3]">
          {frontSrc ? (
            <Image
              src={frontSrc}
              alt={frontLabel || ''}
              fill
              className="object-cover"
            />
          ) : (
            <PlaceholderPhoto label={frontLabel} className="h-full w-full" />
          )}
        </div>
      </div>

      <div className="w-[85%] rotate-2 self-end overflow-hidden rounded-xl border-4 border-paper shadow-[0_10px_24px_-12px_rgba(33,29,24,0.3)]">
        <div className="relative aspect-[3/4]">
          {backSrc ? (
            <Image
              src={backSrc}
              alt={backLabel || ''}
              fill
              className="object-cover"
            />
          ) : (
            <PlaceholderPhoto label={backLabel} className="h-full w-full" />
          )}
        </div>
      </div>
    </div>
  )
}
