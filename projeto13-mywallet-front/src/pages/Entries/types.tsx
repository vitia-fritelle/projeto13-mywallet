export type EntryPage = {
    type:EntryTypes
};

export enum EntryTypes {
    NEWCREDIT,
    NEWDEBIT,
    EDITENTRY,
    DELETEENTRY
}