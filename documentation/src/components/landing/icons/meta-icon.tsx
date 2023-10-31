import clsx from "clsx";
import * as React from "react";
import { SVGProps } from "react";

export const MetaIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={113}
        height={24}
        viewBox="0 0 113 24"
        fill="none"
        {...props}
        className={clsx(
            props.className,
            "flex-shrink-0",
            "w-[80px] h-[16px]",
            "landing-md:w-[90px] landing-md:h-[18px]",
            "landing-md:w-[113px] landing-md:h-[24px]",
            "dark:text-gray-400 text-gray-600",
        )}
    >
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M17.854 5.462C19.83 2.792 22.011.69 24.803.69c5.27 0 9.61 6.709 9.61 14.696 0 4.874-2.097 7.926-5.866 7.926-3.283 0-5.095-1.844-8.347-7.286l-1.669-2.808c-.396-.667-.773-1.29-1.13-1.867l-2.505 4.425c-3.56 6.223-5.562 7.536-8.347 7.536-3.868 0-6.178-3.011-6.178-7.785C.371 7.896 4.615.689 10.153.689c2.717 0 4.987 1.317 7.701 4.773ZM6.69 19.63c1.607 0 2.605-1.014 5.491-5.539 0 0 1.313-2.084 3.48-5.407-2.282-3.267-3.772-4.296-5.555-4.296-3.292 0-6.053 5.663-6.053 11.201 0 2.59.983 4.041 2.637 4.041Zm14.388-9.437 1.996 3.329c3.122 5.022 3.907 6.108 5.551 6.108 1.715 0 2.543-1.466 2.543-3.994 0-6.63-2.933-12.028-6.6-12.028-1.764 0-3.248 1.383-5.047 4.16a69.05 69.05 0 0 1 1.557 2.425Z"
            clipRule="evenodd"
        />
        <path
            fill="currentColor"
            d="M41.575 1.416h4.255l7.234 13.086 7.234-13.086h4.163v21.503H60.99V6.44L54.646 17.85H51.39L45.046 6.439v16.48h-3.471V1.416Z"
        />
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M75.658 23.303c-1.608 0-3.021-.355-4.24-1.067a7.468 7.468 0 0 1-2.849-2.957c-.68-1.26-1.021-2.703-1.021-4.331 0-1.649.333-3.108.998-4.378.666-1.27 1.59-2.262 2.773-2.98 1.182-.716 2.542-1.074 4.078-1.075 1.525 0 2.838.361 3.94 1.083 1.1.722 1.947 1.733 2.541 3.034.594 1.3.891 2.826.891 4.577v.952H70.99c.215 1.311.744 2.343 1.59 3.095.844.753 1.911 1.13 3.202 1.129 1.034 0 1.925-.154 2.672-.46.748-.308 1.449-.774 2.105-1.398l1.843 2.257c-1.834 1.68-4.081 2.52-6.743 2.52Zm2.534-12.756c-.727-.742-1.68-1.113-2.857-1.113-1.147 0-2.107.379-2.88 1.136-.773.758-1.262 1.777-1.467 3.057h8.448c-.102-1.31-.517-2.337-1.244-3.08Z"
            clipRule="evenodd"
        />
        <path
            fill="currentColor"
            d="M83.783 9.741h3.195v7.603c0 3.952 1.807 5.929 5.422 5.929a10.088 10.088 0 0 0 2.78-.384v-2.811c-.369.061-.706.11-1.014.146a9.91 9.91 0 0 1-1.12.053c-.994 0-1.696-.255-2.105-.767-.41-.513-.615-1.368-.615-2.565V9.74h4.854V6.899h-4.854V2.2h-3.348v4.7h-3.195v2.842Z"
        />
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M112.629 22.92h-3.287v-2.243a5.941 5.941 0 0 1-2.227 1.943c-.901.455-1.925.683-3.072.683-1.413 0-2.665-.36-3.755-1.082-1.09-.722-1.948-1.716-2.573-2.98-.625-1.265-.937-2.711-.937-4.34 0-1.638.317-3.086.952-4.346.635-1.26 1.513-2.248 2.634-2.965 1.122-.716 2.409-1.074 3.863-1.075 1.096 0 2.079.213 2.949.638a5.825 5.825 0 0 1 2.166 1.805V6.899h3.287v16.02Zm-3.348-10.414c-.359-.912-.925-1.631-1.698-2.159-.773-.527-1.666-.79-2.68-.79-1.434 0-2.575.48-3.425 1.443-.85.963-1.275 2.263-1.275 3.902 0 1.649.41 2.954 1.229 3.917.819.962 1.93 1.443 3.333 1.443 1.034 0 1.956-.266 2.765-.799a4.519 4.519 0 0 0 1.751-2.15v-4.807Z"
            clipRule="evenodd"
        />
    </svg>
);
