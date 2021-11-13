declare module '*.svg' {
    import React from 'react';
    const content: React.StatelessComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}

declare module '*.jpeg' {
    const value: string;
    export = value;
}

declare module '*.jpg' {
    const value: string;
    export = value;
}

declare module '*.png' {
    const value: string;
    export = value;
}

declare module '*.gif' {
    const value: string;
    export = value;
}

declare module '*.ico' {
    const value: string;
    export = value;
}

declare module '*.webp' {
    const value: string;
    export = value;
}

declare module '*.jp2' {
    const value: string;
    export = value;
}

