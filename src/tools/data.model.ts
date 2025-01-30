export interface Sections {
    hero: React.RefObject<HTMLElement>;
    projects: React.RefObject<HTMLElement>;
    services: React.RefObject<HTMLElement>;
    contact: React.RefObject<HTMLElement>;
};

export interface Project {
    images: string[],
    title: string
    description: string,
    url: string,
    isFeatured: boolean;
    tags: string[],
    buttons: Button[]
}

export interface Button {
    type: string,
    text: string,
    url: string
}