
export enum TokenType {
    ILLEGAL,
    EOF,
    IDENT,
    INT,
    ASSIGN = "=",
    PLUS = "+",

}

export interface Token {
    Type: TokenType
    Literal: string
}
