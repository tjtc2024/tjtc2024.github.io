
/**
 * 値がある
 */
export type Just<T> = {
    type: "just";
    value: T;
}
  
/**
  * 値がない
  */
export type Nothing = {
    type: "nothing"
}
  
/**
  * 値があるかないかわからない
  */
export type Maybe<T> = Just<T> | Nothing
  
/**
  * 値を Maybe でつつむ
  */
export type Of = <T>(value: T) => Just<T>
  
/**
  * あるかないかわからない値を包む
  */
export type OfNullable = <T>(value: T | undefined | null) => Maybe<T>

export type MatchWith = <T>(m : Maybe<T>) => boolean

/**
  * 値を取り出す。値がなければデフォルト値を取り出す
  */
export type GetOrElse = <T>(ele: T) => (maybe: Maybe<T>) => T
  
/**
  * 値を移す
  */
export type MapMaybe = <T, U>(f: (a: T) => U) => (m: Maybe<T>) => Maybe<U>
  
/**
  * 値を潰す
  */
export type Flatten = <T>(m: Maybe<Maybe<T>>) => Maybe<T>
  
/**
  * 値を移して潰す
  */
export type Bind = <T, U>(f: (a: T) => Maybe<U>) => (m: Maybe<T>) => Maybe<U>
  
// 実装
export const of: Of = (value) => ({ type: "just", value })
export const nothing : Nothing = {type : "nothing"}
export const ofNullable: OfNullable = (value) => value === undefined || value === null ? ({ type: "nothing"}) : ({ type: "just", value })
export const hasValue : MatchWith = (m) => m.type === "just" 
export const map: MapMaybe = (f) => (m) => m.type === "nothing" ? ({ type: "nothing"}) : of(f(m.value))
//export const map: MapMaybe = (f) => (m) => m.type === "nothing" ? ({ type: "nothing"}) : of(f(m.value))
export const flatten: Flatten = (mm) => mm.type === "nothing" ? ({ type: "nothing"}) : mm.value
export const bind: Bind = (f) => (m) => m.type === "nothing" ? ({ type: "nothing"}) : f(m.value)
export const getOrElse: GetOrElse = (a) => (m) => m.type === "nothing" ? a : m.value




