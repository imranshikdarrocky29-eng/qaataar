import { useState } from 'react';
import { Wrench } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  fallbackLabel?: string;
}

export function ResilientImage({
  src,
  alt,
  className = 'w-full h-full object-cover',
  containerClassName = '',
  fallbackLabel,
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#041E42] via-[#072959] to-[#02142E] text-slate-200 p-6 text-center ${containerClassName}`}
        role="img"
        aria-label={alt}
      >
        <div className="w-12 h-12 rounded-xl bg-[#F5B700]/15 border border-[#F5B700]/40 flex items-center justify-center mb-3">
          <Wrench className="w-5 h-5 text-[#F5B700]" aria-hidden="true" />
        </div>
        <span className="text-sm font-medium text-white">
          {fallbackLabel || 'Fix Hub Qatar'}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
      loading="lazy"
    />
  );
}
