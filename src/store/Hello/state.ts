export interface Item {
    userId: number,
    id: number,
    title: string,
    body: string,
};

export interface HelloState {
    message: string,
    items: Item[],
    toggleRead: boolean,
};