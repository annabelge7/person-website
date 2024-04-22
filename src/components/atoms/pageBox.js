import Image from 'next/image'

export default function PageBox({ code, title, text, titleLink }) {
  return (
    <div
      className=" mb-4 
    mt-4 flex flex-col  items-center 
    rounded-md bg-extra p-4 pb-5 pt-5 shadow-md"
    >
      {title &&
        (titleLink ? (
          <a
            href={titleLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-accent"
          >
            <h1 className="cursor-pointer rounded-md bg-extra pb-2 pl-56 pr-56 pt-2 text-xl font-semibold">
              {title}
            </h1>
          </a>
        ) : (
          <h1 className="rounded-md bg-extra pb-2 pl-56 pr-56 pt-2 text-xl font-semibold">
            {title}
          </h1>
        ))}
      {code && (
        <pre className="my-2 overflow-auto rounded-md bg-dark p-3 text-sm text-accent shadow-lg">
          {code}
        </pre>
      )}
      <div className="flex justify-center pt-2">
        {/* {image && (
          <Image
            src={image}
            alt="personal pic"
            className="h-60 w-auto rounded-md p-2 shadow-lg"
          />
        )} */}
        {text && (
          <p className="text-md my-2 w-3/4 overflow-auto rounded-md bg-background p-7 text-dark shadow-lg">
            {text}
          </p>
        )}
      </div>
    </div>
  )
}
