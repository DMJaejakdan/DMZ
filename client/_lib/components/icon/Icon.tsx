import { HTMLAttributes } from 'react';
import { COLOR_VARIANT } from './Icon.css';

interface Props extends HTMLAttributes<HTMLDivElement> {
  type: keyof typeof ICON_TYPE;
  color: keyof typeof COLOR_VARIANT;
}

export function Icon({ type, color, ...props }: Props) {
  return (
    <span {...props} className={COLOR_VARIANT[color]}>
      <span dangerouslySetInnerHTML={{ __html: ICON_TYPE[type] }} />
    </span>
  );
}

const ICON_TYPE = {
  search:
    '<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M384.035-336Q284-336 214-406t-70-170q0-100 70-170t170-70q100 0 170 70t70 170.035q0 40.381-12.5 76.173T577-434l214 214q11 11 11 25t-11 25q-11 11-25.5 11T740-170L526-383q-30 22-65.792 34.5T384.035-336ZM384-408q70 0 119-49t49-119q0-70-49-119t-119-49q-70 0-119 49t-49 119q0 70 49 119t119 49Z"/></svg>',
  close:
    '<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -940 900 960" width="20"><path d="M480-429 316-265q-11 11-25 10.5T266-266q-11-11-11-25.5t11-25.5l163-163-164-164q-11-11-10.5-25.5T266-695q11-11 25.5-11t25.5 11l163 164 164-164q11-11 25.5-11t25.5 11q11 11 11 25.5T695-644L531-480l164 164q11 11 11 25t-11 25q-11 11-25.5 11T644-266L480-429Z"/></svg>',
  archive:
    '<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M270-80q-45 0-77.5-29.637T160-183v-564q0-36.566 22.118-65.434Q204.235-841.302 240-849l308-64q28-6 50 12.14 22 18.139 22 46.86v497q0 21.162-13 37.581Q594-303 573-298l-313 67q-17.143 3.692-28.571 17.538Q220-199.615 220-183q0 19 15 31t35 12h470v-630q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T800-770v630q0 24.75-17.625 42.375T740-80H270Zm70-228 220-47v-499l-220 45v501Zm-60 12.809V-796l-20 4q-17 4-28.5 15.827T220-747v471q9.062-5.2 19.031-9.1Q249-289 260-291l20-4.191ZM220-792v516-516Z"/></svg>',
  map: '<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-43-61v-82q-35 0-59-26t-24-61v-44L149-559q-5 20-7 39.5t-2 39.5q0 130 84.5 227T437-141Zm294-108q22-24 38.5-51t28-56.5q11.5-29.5 17-60.5t5.5-63q0-106-58-192.5T607-799v18q0 35-24 61t-59 26h-87v87q0 17-13.5 28T393-568h-83v88h258q17 0 28 13t11 30v127h43q29 0 51 17t30 44Z"/></svg>',
};
