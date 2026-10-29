"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { basePath } from "@/lib/basePath";
import type { ProjectImage } from "@/lib/projects";

export default function ProjectGallery({ images, title }: { images: ProjectImage[]; title: string }) {
  const [selected, setSelected] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const current = images[selected];
  if (!current) return null;
  const source = (image: ProjectImage) => `${basePath}/images/projects/${image.src}`;

  return (
    <div className="mt-6">
      <button type="button" onClick={() => dialog.current?.showModal()}
        className="group relative block w-full aspect-video overflow-hidden rounded-xl border border-hairline bg-mist"
        aria-label={`Enlarge ${title}: ${current.alt}`}>
        <Image src={source(current)} alt={current.alt} fill sizes="(min-width: 768px) 520px, 90vw" className="object-contain p-2" />
        <span className="absolute bottom-2 right-2 rounded-full bg-ink/90 text-white px-3 py-1 text-xs">Enlarge image</span>
      </button>
      {images.length > 1 && (
        <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label={`${title} screenshots`}>
          {images.map((image, index) => (
            <button key={image.src} type="button" onClick={() => setSelected(index)} aria-pressed={index === selected}
              aria-label={`Show image ${index + 1}: ${image.alt}`}
              className={`relative h-14 w-20 rounded-md border overflow-hidden bg-mist ${index === selected ? "border-accent ring-1 ring-accent" : "border-hairline"}`}>
              <Image src={source(image)} alt="" fill sizes="80px" className="object-contain p-1" />
            </button>
          ))}
        </div>
      )}
      <dialog ref={dialog} aria-label={`${title} image viewer`}
        onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }}
        className="project-dialog m-auto max-h-[95vh] overflow-y-auto w-[96vw] max-w-6xl rounded-2xl bg-paper p-4 text-ink backdrop:bg-black/80">
        <div className="mb-3 flex items-center justify-between gap-4">
          <p className="font-medium text-sm">{title}</p>
          <button type="button" onClick={() => dialog.current?.close()} className="rounded-full border border-hairline px-4 py-2 text-sm">Close</button>
        </div>
        <div className="relative h-[65vh] sm:h-[75vh]">
          <Image src={source(current)} alt={current.alt} fill sizes="95vw" className="object-contain" />
        </div>
        <p className="mt-3 text-sm text-fog">{current.alt}</p>
        {images.length > 1 && (
          <div className="mt-3 flex items-center justify-between gap-3">
            <button type="button" onClick={() => setSelected((selected + images.length - 1) % images.length)} className="rounded-full border border-hairline px-4 py-2 text-sm">Previous</button>
            <span className="font-mono text-xs">{selected + 1} / {images.length}</span>
            <button type="button" onClick={() => setSelected((selected + 1) % images.length)} className="rounded-full border border-hairline px-4 py-2 text-sm">Next</button>
          </div>
        )}
      </dialog>
    </div>
  );
}
