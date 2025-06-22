
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Warehouse
 * 
 */
export type Warehouse = $Result.DefaultSelection<Prisma.$WarehousePayload>
/**
 * Model Supplier
 * 
 */
export type Supplier = $Result.DefaultSelection<Prisma.$SupplierPayload>
/**
 * Model ImportReceipt
 * 
 */
export type ImportReceipt = $Result.DefaultSelection<Prisma.$ImportReceiptPayload>
/**
 * Model ImportReceiptItem
 * 
 */
export type ImportReceiptItem = $Result.DefaultSelection<Prisma.$ImportReceiptItemPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Warehouses
 * const warehouses = await prisma.warehouse.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Warehouses
   * const warehouses = await prisma.warehouse.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.warehouse`: Exposes CRUD operations for the **Warehouse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Warehouses
    * const warehouses = await prisma.warehouse.findMany()
    * ```
    */
  get warehouse(): Prisma.WarehouseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.supplier`: Exposes CRUD operations for the **Supplier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Suppliers
    * const suppliers = await prisma.supplier.findMany()
    * ```
    */
  get supplier(): Prisma.SupplierDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.importReceipt`: Exposes CRUD operations for the **ImportReceipt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ImportReceipts
    * const importReceipts = await prisma.importReceipt.findMany()
    * ```
    */
  get importReceipt(): Prisma.ImportReceiptDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.importReceiptItem`: Exposes CRUD operations for the **ImportReceiptItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ImportReceiptItems
    * const importReceiptItems = await prisma.importReceiptItem.findMany()
    * ```
    */
  get importReceiptItem(): Prisma.ImportReceiptItemDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Warehouse: 'Warehouse',
    Supplier: 'Supplier',
    ImportReceipt: 'ImportReceipt',
    ImportReceiptItem: 'ImportReceiptItem'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "warehouse" | "supplier" | "importReceipt" | "importReceiptItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Warehouse: {
        payload: Prisma.$WarehousePayload<ExtArgs>
        fields: Prisma.WarehouseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WarehouseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WarehouseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          findFirst: {
            args: Prisma.WarehouseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WarehouseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          findMany: {
            args: Prisma.WarehouseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>[]
          }
          create: {
            args: Prisma.WarehouseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          createMany: {
            args: Prisma.WarehouseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WarehouseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>[]
          }
          delete: {
            args: Prisma.WarehouseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          update: {
            args: Prisma.WarehouseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          deleteMany: {
            args: Prisma.WarehouseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WarehouseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WarehouseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>[]
          }
          upsert: {
            args: Prisma.WarehouseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          aggregate: {
            args: Prisma.WarehouseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWarehouse>
          }
          groupBy: {
            args: Prisma.WarehouseGroupByArgs<ExtArgs>
            result: $Utils.Optional<WarehouseGroupByOutputType>[]
          }
          count: {
            args: Prisma.WarehouseCountArgs<ExtArgs>
            result: $Utils.Optional<WarehouseCountAggregateOutputType> | number
          }
        }
      }
      Supplier: {
        payload: Prisma.$SupplierPayload<ExtArgs>
        fields: Prisma.SupplierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupplierFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupplierFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          findFirst: {
            args: Prisma.SupplierFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupplierFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          findMany: {
            args: Prisma.SupplierFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          create: {
            args: Prisma.SupplierCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          createMany: {
            args: Prisma.SupplierCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SupplierCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          delete: {
            args: Prisma.SupplierDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          update: {
            args: Prisma.SupplierUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          deleteMany: {
            args: Prisma.SupplierDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupplierUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SupplierUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          upsert: {
            args: Prisma.SupplierUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          aggregate: {
            args: Prisma.SupplierAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupplier>
          }
          groupBy: {
            args: Prisma.SupplierGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupplierGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupplierCountArgs<ExtArgs>
            result: $Utils.Optional<SupplierCountAggregateOutputType> | number
          }
        }
      }
      ImportReceipt: {
        payload: Prisma.$ImportReceiptPayload<ExtArgs>
        fields: Prisma.ImportReceiptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImportReceiptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportReceiptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImportReceiptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportReceiptPayload>
          }
          findFirst: {
            args: Prisma.ImportReceiptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportReceiptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImportReceiptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportReceiptPayload>
          }
          findMany: {
            args: Prisma.ImportReceiptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportReceiptPayload>[]
          }
          create: {
            args: Prisma.ImportReceiptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportReceiptPayload>
          }
          createMany: {
            args: Prisma.ImportReceiptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImportReceiptCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportReceiptPayload>[]
          }
          delete: {
            args: Prisma.ImportReceiptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportReceiptPayload>
          }
          update: {
            args: Prisma.ImportReceiptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportReceiptPayload>
          }
          deleteMany: {
            args: Prisma.ImportReceiptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImportReceiptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImportReceiptUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportReceiptPayload>[]
          }
          upsert: {
            args: Prisma.ImportReceiptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportReceiptPayload>
          }
          aggregate: {
            args: Prisma.ImportReceiptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImportReceipt>
          }
          groupBy: {
            args: Prisma.ImportReceiptGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImportReceiptGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImportReceiptCountArgs<ExtArgs>
            result: $Utils.Optional<ImportReceiptCountAggregateOutputType> | number
          }
        }
      }
      ImportReceiptItem: {
        payload: Prisma.$ImportReceiptItemPayload<ExtArgs>
        fields: Prisma.ImportReceiptItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImportReceiptItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportReceiptItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImportReceiptItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportReceiptItemPayload>
          }
          findFirst: {
            args: Prisma.ImportReceiptItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportReceiptItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImportReceiptItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportReceiptItemPayload>
          }
          findMany: {
            args: Prisma.ImportReceiptItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportReceiptItemPayload>[]
          }
          create: {
            args: Prisma.ImportReceiptItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportReceiptItemPayload>
          }
          createMany: {
            args: Prisma.ImportReceiptItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImportReceiptItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportReceiptItemPayload>[]
          }
          delete: {
            args: Prisma.ImportReceiptItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportReceiptItemPayload>
          }
          update: {
            args: Prisma.ImportReceiptItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportReceiptItemPayload>
          }
          deleteMany: {
            args: Prisma.ImportReceiptItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImportReceiptItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImportReceiptItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportReceiptItemPayload>[]
          }
          upsert: {
            args: Prisma.ImportReceiptItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportReceiptItemPayload>
          }
          aggregate: {
            args: Prisma.ImportReceiptItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImportReceiptItem>
          }
          groupBy: {
            args: Prisma.ImportReceiptItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImportReceiptItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImportReceiptItemCountArgs<ExtArgs>
            result: $Utils.Optional<ImportReceiptItemCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    warehouse?: WarehouseOmit
    supplier?: SupplierOmit
    importReceipt?: ImportReceiptOmit
    importReceiptItem?: ImportReceiptItemOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type WarehouseCountOutputType
   */

  export type WarehouseCountOutputType = {
    receipts: number
  }

  export type WarehouseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receipts?: boolean | WarehouseCountOutputTypeCountReceiptsArgs
  }

  // Custom InputTypes
  /**
   * WarehouseCountOutputType without action
   */
  export type WarehouseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehouseCountOutputType
     */
    select?: WarehouseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WarehouseCountOutputType without action
   */
  export type WarehouseCountOutputTypeCountReceiptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImportReceiptWhereInput
  }


  /**
   * Count Type SupplierCountOutputType
   */

  export type SupplierCountOutputType = {
    receipts: number
  }

  export type SupplierCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receipts?: boolean | SupplierCountOutputTypeCountReceiptsArgs
  }

  // Custom InputTypes
  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierCountOutputType
     */
    select?: SupplierCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeCountReceiptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImportReceiptWhereInput
  }


  /**
   * Count Type ImportReceiptCountOutputType
   */

  export type ImportReceiptCountOutputType = {
    items: number
  }

  export type ImportReceiptCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | ImportReceiptCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * ImportReceiptCountOutputType without action
   */
  export type ImportReceiptCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportReceiptCountOutputType
     */
    select?: ImportReceiptCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ImportReceiptCountOutputType without action
   */
  export type ImportReceiptCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImportReceiptItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Warehouse
   */

  export type AggregateWarehouse = {
    _count: WarehouseCountAggregateOutputType | null
    _avg: WarehouseAvgAggregateOutputType | null
    _sum: WarehouseSumAggregateOutputType | null
    _min: WarehouseMinAggregateOutputType | null
    _max: WarehouseMaxAggregateOutputType | null
  }

  export type WarehouseAvgAggregateOutputType = {
    id: number | null
  }

  export type WarehouseSumAggregateOutputType = {
    id: number | null
  }

  export type WarehouseMinAggregateOutputType = {
    id: number | null
    name: string | null
    location: string | null
  }

  export type WarehouseMaxAggregateOutputType = {
    id: number | null
    name: string | null
    location: string | null
  }

  export type WarehouseCountAggregateOutputType = {
    id: number
    name: number
    location: number
    _all: number
  }


  export type WarehouseAvgAggregateInputType = {
    id?: true
  }

  export type WarehouseSumAggregateInputType = {
    id?: true
  }

  export type WarehouseMinAggregateInputType = {
    id?: true
    name?: true
    location?: true
  }

  export type WarehouseMaxAggregateInputType = {
    id?: true
    name?: true
    location?: true
  }

  export type WarehouseCountAggregateInputType = {
    id?: true
    name?: true
    location?: true
    _all?: true
  }

  export type WarehouseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Warehouse to aggregate.
     */
    where?: WarehouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warehouses to fetch.
     */
    orderBy?: WarehouseOrderByWithRelationInput | WarehouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WarehouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warehouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Warehouses
    **/
    _count?: true | WarehouseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WarehouseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WarehouseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WarehouseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WarehouseMaxAggregateInputType
  }

  export type GetWarehouseAggregateType<T extends WarehouseAggregateArgs> = {
        [P in keyof T & keyof AggregateWarehouse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWarehouse[P]>
      : GetScalarType<T[P], AggregateWarehouse[P]>
  }




  export type WarehouseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WarehouseWhereInput
    orderBy?: WarehouseOrderByWithAggregationInput | WarehouseOrderByWithAggregationInput[]
    by: WarehouseScalarFieldEnum[] | WarehouseScalarFieldEnum
    having?: WarehouseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WarehouseCountAggregateInputType | true
    _avg?: WarehouseAvgAggregateInputType
    _sum?: WarehouseSumAggregateInputType
    _min?: WarehouseMinAggregateInputType
    _max?: WarehouseMaxAggregateInputType
  }

  export type WarehouseGroupByOutputType = {
    id: number
    name: string
    location: string
    _count: WarehouseCountAggregateOutputType | null
    _avg: WarehouseAvgAggregateOutputType | null
    _sum: WarehouseSumAggregateOutputType | null
    _min: WarehouseMinAggregateOutputType | null
    _max: WarehouseMaxAggregateOutputType | null
  }

  type GetWarehouseGroupByPayload<T extends WarehouseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WarehouseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WarehouseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WarehouseGroupByOutputType[P]>
            : GetScalarType<T[P], WarehouseGroupByOutputType[P]>
        }
      >
    >


  export type WarehouseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    receipts?: boolean | Warehouse$receiptsArgs<ExtArgs>
    _count?: boolean | WarehouseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["warehouse"]>

  export type WarehouseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
  }, ExtArgs["result"]["warehouse"]>

  export type WarehouseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
  }, ExtArgs["result"]["warehouse"]>

  export type WarehouseSelectScalar = {
    id?: boolean
    name?: boolean
    location?: boolean
  }

  export type WarehouseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "location", ExtArgs["result"]["warehouse"]>
  export type WarehouseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receipts?: boolean | Warehouse$receiptsArgs<ExtArgs>
    _count?: boolean | WarehouseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WarehouseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type WarehouseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WarehousePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Warehouse"
    objects: {
      receipts: Prisma.$ImportReceiptPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      location: string
    }, ExtArgs["result"]["warehouse"]>
    composites: {}
  }

  type WarehouseGetPayload<S extends boolean | null | undefined | WarehouseDefaultArgs> = $Result.GetResult<Prisma.$WarehousePayload, S>

  type WarehouseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WarehouseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WarehouseCountAggregateInputType | true
    }

  export interface WarehouseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Warehouse'], meta: { name: 'Warehouse' } }
    /**
     * Find zero or one Warehouse that matches the filter.
     * @param {WarehouseFindUniqueArgs} args - Arguments to find a Warehouse
     * @example
     * // Get one Warehouse
     * const warehouse = await prisma.warehouse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WarehouseFindUniqueArgs>(args: SelectSubset<T, WarehouseFindUniqueArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Warehouse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WarehouseFindUniqueOrThrowArgs} args - Arguments to find a Warehouse
     * @example
     * // Get one Warehouse
     * const warehouse = await prisma.warehouse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WarehouseFindUniqueOrThrowArgs>(args: SelectSubset<T, WarehouseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Warehouse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseFindFirstArgs} args - Arguments to find a Warehouse
     * @example
     * // Get one Warehouse
     * const warehouse = await prisma.warehouse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WarehouseFindFirstArgs>(args?: SelectSubset<T, WarehouseFindFirstArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Warehouse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseFindFirstOrThrowArgs} args - Arguments to find a Warehouse
     * @example
     * // Get one Warehouse
     * const warehouse = await prisma.warehouse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WarehouseFindFirstOrThrowArgs>(args?: SelectSubset<T, WarehouseFindFirstOrThrowArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Warehouses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Warehouses
     * const warehouses = await prisma.warehouse.findMany()
     * 
     * // Get first 10 Warehouses
     * const warehouses = await prisma.warehouse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const warehouseWithIdOnly = await prisma.warehouse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WarehouseFindManyArgs>(args?: SelectSubset<T, WarehouseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Warehouse.
     * @param {WarehouseCreateArgs} args - Arguments to create a Warehouse.
     * @example
     * // Create one Warehouse
     * const Warehouse = await prisma.warehouse.create({
     *   data: {
     *     // ... data to create a Warehouse
     *   }
     * })
     * 
     */
    create<T extends WarehouseCreateArgs>(args: SelectSubset<T, WarehouseCreateArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Warehouses.
     * @param {WarehouseCreateManyArgs} args - Arguments to create many Warehouses.
     * @example
     * // Create many Warehouses
     * const warehouse = await prisma.warehouse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WarehouseCreateManyArgs>(args?: SelectSubset<T, WarehouseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Warehouses and returns the data saved in the database.
     * @param {WarehouseCreateManyAndReturnArgs} args - Arguments to create many Warehouses.
     * @example
     * // Create many Warehouses
     * const warehouse = await prisma.warehouse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Warehouses and only return the `id`
     * const warehouseWithIdOnly = await prisma.warehouse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WarehouseCreateManyAndReturnArgs>(args?: SelectSubset<T, WarehouseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Warehouse.
     * @param {WarehouseDeleteArgs} args - Arguments to delete one Warehouse.
     * @example
     * // Delete one Warehouse
     * const Warehouse = await prisma.warehouse.delete({
     *   where: {
     *     // ... filter to delete one Warehouse
     *   }
     * })
     * 
     */
    delete<T extends WarehouseDeleteArgs>(args: SelectSubset<T, WarehouseDeleteArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Warehouse.
     * @param {WarehouseUpdateArgs} args - Arguments to update one Warehouse.
     * @example
     * // Update one Warehouse
     * const warehouse = await prisma.warehouse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WarehouseUpdateArgs>(args: SelectSubset<T, WarehouseUpdateArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Warehouses.
     * @param {WarehouseDeleteManyArgs} args - Arguments to filter Warehouses to delete.
     * @example
     * // Delete a few Warehouses
     * const { count } = await prisma.warehouse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WarehouseDeleteManyArgs>(args?: SelectSubset<T, WarehouseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Warehouses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Warehouses
     * const warehouse = await prisma.warehouse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WarehouseUpdateManyArgs>(args: SelectSubset<T, WarehouseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Warehouses and returns the data updated in the database.
     * @param {WarehouseUpdateManyAndReturnArgs} args - Arguments to update many Warehouses.
     * @example
     * // Update many Warehouses
     * const warehouse = await prisma.warehouse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Warehouses and only return the `id`
     * const warehouseWithIdOnly = await prisma.warehouse.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WarehouseUpdateManyAndReturnArgs>(args: SelectSubset<T, WarehouseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Warehouse.
     * @param {WarehouseUpsertArgs} args - Arguments to update or create a Warehouse.
     * @example
     * // Update or create a Warehouse
     * const warehouse = await prisma.warehouse.upsert({
     *   create: {
     *     // ... data to create a Warehouse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Warehouse we want to update
     *   }
     * })
     */
    upsert<T extends WarehouseUpsertArgs>(args: SelectSubset<T, WarehouseUpsertArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Warehouses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseCountArgs} args - Arguments to filter Warehouses to count.
     * @example
     * // Count the number of Warehouses
     * const count = await prisma.warehouse.count({
     *   where: {
     *     // ... the filter for the Warehouses we want to count
     *   }
     * })
    **/
    count<T extends WarehouseCountArgs>(
      args?: Subset<T, WarehouseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WarehouseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Warehouse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WarehouseAggregateArgs>(args: Subset<T, WarehouseAggregateArgs>): Prisma.PrismaPromise<GetWarehouseAggregateType<T>>

    /**
     * Group by Warehouse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WarehouseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WarehouseGroupByArgs['orderBy'] }
        : { orderBy?: WarehouseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WarehouseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWarehouseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Warehouse model
   */
  readonly fields: WarehouseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Warehouse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WarehouseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    receipts<T extends Warehouse$receiptsArgs<ExtArgs> = {}>(args?: Subset<T, Warehouse$receiptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImportReceiptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Warehouse model
   */
  interface WarehouseFieldRefs {
    readonly id: FieldRef<"Warehouse", 'Int'>
    readonly name: FieldRef<"Warehouse", 'String'>
    readonly location: FieldRef<"Warehouse", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Warehouse findUnique
   */
  export type WarehouseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter, which Warehouse to fetch.
     */
    where: WarehouseWhereUniqueInput
  }

  /**
   * Warehouse findUniqueOrThrow
   */
  export type WarehouseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter, which Warehouse to fetch.
     */
    where: WarehouseWhereUniqueInput
  }

  /**
   * Warehouse findFirst
   */
  export type WarehouseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter, which Warehouse to fetch.
     */
    where?: WarehouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warehouses to fetch.
     */
    orderBy?: WarehouseOrderByWithRelationInput | WarehouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Warehouses.
     */
    cursor?: WarehouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warehouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Warehouses.
     */
    distinct?: WarehouseScalarFieldEnum | WarehouseScalarFieldEnum[]
  }

  /**
   * Warehouse findFirstOrThrow
   */
  export type WarehouseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter, which Warehouse to fetch.
     */
    where?: WarehouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warehouses to fetch.
     */
    orderBy?: WarehouseOrderByWithRelationInput | WarehouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Warehouses.
     */
    cursor?: WarehouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warehouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Warehouses.
     */
    distinct?: WarehouseScalarFieldEnum | WarehouseScalarFieldEnum[]
  }

  /**
   * Warehouse findMany
   */
  export type WarehouseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter, which Warehouses to fetch.
     */
    where?: WarehouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warehouses to fetch.
     */
    orderBy?: WarehouseOrderByWithRelationInput | WarehouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Warehouses.
     */
    cursor?: WarehouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warehouses.
     */
    skip?: number
    distinct?: WarehouseScalarFieldEnum | WarehouseScalarFieldEnum[]
  }

  /**
   * Warehouse create
   */
  export type WarehouseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * The data needed to create a Warehouse.
     */
    data: XOR<WarehouseCreateInput, WarehouseUncheckedCreateInput>
  }

  /**
   * Warehouse createMany
   */
  export type WarehouseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Warehouses.
     */
    data: WarehouseCreateManyInput | WarehouseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Warehouse createManyAndReturn
   */
  export type WarehouseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * The data used to create many Warehouses.
     */
    data: WarehouseCreateManyInput | WarehouseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Warehouse update
   */
  export type WarehouseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * The data needed to update a Warehouse.
     */
    data: XOR<WarehouseUpdateInput, WarehouseUncheckedUpdateInput>
    /**
     * Choose, which Warehouse to update.
     */
    where: WarehouseWhereUniqueInput
  }

  /**
   * Warehouse updateMany
   */
  export type WarehouseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Warehouses.
     */
    data: XOR<WarehouseUpdateManyMutationInput, WarehouseUncheckedUpdateManyInput>
    /**
     * Filter which Warehouses to update
     */
    where?: WarehouseWhereInput
    /**
     * Limit how many Warehouses to update.
     */
    limit?: number
  }

  /**
   * Warehouse updateManyAndReturn
   */
  export type WarehouseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * The data used to update Warehouses.
     */
    data: XOR<WarehouseUpdateManyMutationInput, WarehouseUncheckedUpdateManyInput>
    /**
     * Filter which Warehouses to update
     */
    where?: WarehouseWhereInput
    /**
     * Limit how many Warehouses to update.
     */
    limit?: number
  }

  /**
   * Warehouse upsert
   */
  export type WarehouseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * The filter to search for the Warehouse to update in case it exists.
     */
    where: WarehouseWhereUniqueInput
    /**
     * In case the Warehouse found by the `where` argument doesn't exist, create a new Warehouse with this data.
     */
    create: XOR<WarehouseCreateInput, WarehouseUncheckedCreateInput>
    /**
     * In case the Warehouse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WarehouseUpdateInput, WarehouseUncheckedUpdateInput>
  }

  /**
   * Warehouse delete
   */
  export type WarehouseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter which Warehouse to delete.
     */
    where: WarehouseWhereUniqueInput
  }

  /**
   * Warehouse deleteMany
   */
  export type WarehouseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Warehouses to delete
     */
    where?: WarehouseWhereInput
    /**
     * Limit how many Warehouses to delete.
     */
    limit?: number
  }

  /**
   * Warehouse.receipts
   */
  export type Warehouse$receiptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportReceipt
     */
    select?: ImportReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportReceipt
     */
    omit?: ImportReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportReceiptInclude<ExtArgs> | null
    where?: ImportReceiptWhereInput
    orderBy?: ImportReceiptOrderByWithRelationInput | ImportReceiptOrderByWithRelationInput[]
    cursor?: ImportReceiptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImportReceiptScalarFieldEnum | ImportReceiptScalarFieldEnum[]
  }

  /**
   * Warehouse without action
   */
  export type WarehouseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
  }


  /**
   * Model Supplier
   */

  export type AggregateSupplier = {
    _count: SupplierCountAggregateOutputType | null
    _avg: SupplierAvgAggregateOutputType | null
    _sum: SupplierSumAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  export type SupplierAvgAggregateOutputType = {
    id: number | null
  }

  export type SupplierSumAggregateOutputType = {
    id: number | null
  }

  export type SupplierMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type SupplierMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type SupplierCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type SupplierAvgAggregateInputType = {
    id?: true
  }

  export type SupplierSumAggregateInputType = {
    id?: true
  }

  export type SupplierMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type SupplierMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type SupplierCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type SupplierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Supplier to aggregate.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Suppliers
    **/
    _count?: true | SupplierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SupplierAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SupplierSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupplierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupplierMaxAggregateInputType
  }

  export type GetSupplierAggregateType<T extends SupplierAggregateArgs> = {
        [P in keyof T & keyof AggregateSupplier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupplier[P]>
      : GetScalarType<T[P], AggregateSupplier[P]>
  }




  export type SupplierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupplierWhereInput
    orderBy?: SupplierOrderByWithAggregationInput | SupplierOrderByWithAggregationInput[]
    by: SupplierScalarFieldEnum[] | SupplierScalarFieldEnum
    having?: SupplierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupplierCountAggregateInputType | true
    _avg?: SupplierAvgAggregateInputType
    _sum?: SupplierSumAggregateInputType
    _min?: SupplierMinAggregateInputType
    _max?: SupplierMaxAggregateInputType
  }

  export type SupplierGroupByOutputType = {
    id: number
    name: string
    _count: SupplierCountAggregateOutputType | null
    _avg: SupplierAvgAggregateOutputType | null
    _sum: SupplierSumAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  type GetSupplierGroupByPayload<T extends SupplierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupplierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupplierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupplierGroupByOutputType[P]>
            : GetScalarType<T[P], SupplierGroupByOutputType[P]>
        }
      >
    >


  export type SupplierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    receipts?: boolean | Supplier$receiptsArgs<ExtArgs>
    _count?: boolean | SupplierCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplier"]>

  export type SupplierSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["supplier"]>

  export type SupplierSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["supplier"]>

  export type SupplierSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type SupplierOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["supplier"]>
  export type SupplierInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receipts?: boolean | Supplier$receiptsArgs<ExtArgs>
    _count?: boolean | SupplierCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SupplierIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SupplierIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SupplierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Supplier"
    objects: {
      receipts: Prisma.$ImportReceiptPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["supplier"]>
    composites: {}
  }

  type SupplierGetPayload<S extends boolean | null | undefined | SupplierDefaultArgs> = $Result.GetResult<Prisma.$SupplierPayload, S>

  type SupplierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SupplierFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SupplierCountAggregateInputType | true
    }

  export interface SupplierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Supplier'], meta: { name: 'Supplier' } }
    /**
     * Find zero or one Supplier that matches the filter.
     * @param {SupplierFindUniqueArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupplierFindUniqueArgs>(args: SelectSubset<T, SupplierFindUniqueArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Supplier that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SupplierFindUniqueOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupplierFindUniqueOrThrowArgs>(args: SelectSubset<T, SupplierFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Supplier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindFirstArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupplierFindFirstArgs>(args?: SelectSubset<T, SupplierFindFirstArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Supplier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindFirstOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupplierFindFirstOrThrowArgs>(args?: SelectSubset<T, SupplierFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Suppliers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Suppliers
     * const suppliers = await prisma.supplier.findMany()
     * 
     * // Get first 10 Suppliers
     * const suppliers = await prisma.supplier.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supplierWithIdOnly = await prisma.supplier.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SupplierFindManyArgs>(args?: SelectSubset<T, SupplierFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Supplier.
     * @param {SupplierCreateArgs} args - Arguments to create a Supplier.
     * @example
     * // Create one Supplier
     * const Supplier = await prisma.supplier.create({
     *   data: {
     *     // ... data to create a Supplier
     *   }
     * })
     * 
     */
    create<T extends SupplierCreateArgs>(args: SelectSubset<T, SupplierCreateArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Suppliers.
     * @param {SupplierCreateManyArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const supplier = await prisma.supplier.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupplierCreateManyArgs>(args?: SelectSubset<T, SupplierCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Suppliers and returns the data saved in the database.
     * @param {SupplierCreateManyAndReturnArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const supplier = await prisma.supplier.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Suppliers and only return the `id`
     * const supplierWithIdOnly = await prisma.supplier.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SupplierCreateManyAndReturnArgs>(args?: SelectSubset<T, SupplierCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Supplier.
     * @param {SupplierDeleteArgs} args - Arguments to delete one Supplier.
     * @example
     * // Delete one Supplier
     * const Supplier = await prisma.supplier.delete({
     *   where: {
     *     // ... filter to delete one Supplier
     *   }
     * })
     * 
     */
    delete<T extends SupplierDeleteArgs>(args: SelectSubset<T, SupplierDeleteArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Supplier.
     * @param {SupplierUpdateArgs} args - Arguments to update one Supplier.
     * @example
     * // Update one Supplier
     * const supplier = await prisma.supplier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupplierUpdateArgs>(args: SelectSubset<T, SupplierUpdateArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Suppliers.
     * @param {SupplierDeleteManyArgs} args - Arguments to filter Suppliers to delete.
     * @example
     * // Delete a few Suppliers
     * const { count } = await prisma.supplier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupplierDeleteManyArgs>(args?: SelectSubset<T, SupplierDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Suppliers
     * const supplier = await prisma.supplier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupplierUpdateManyArgs>(args: SelectSubset<T, SupplierUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers and returns the data updated in the database.
     * @param {SupplierUpdateManyAndReturnArgs} args - Arguments to update many Suppliers.
     * @example
     * // Update many Suppliers
     * const supplier = await prisma.supplier.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Suppliers and only return the `id`
     * const supplierWithIdOnly = await prisma.supplier.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SupplierUpdateManyAndReturnArgs>(args: SelectSubset<T, SupplierUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Supplier.
     * @param {SupplierUpsertArgs} args - Arguments to update or create a Supplier.
     * @example
     * // Update or create a Supplier
     * const supplier = await prisma.supplier.upsert({
     *   create: {
     *     // ... data to create a Supplier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Supplier we want to update
     *   }
     * })
     */
    upsert<T extends SupplierUpsertArgs>(args: SelectSubset<T, SupplierUpsertArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierCountArgs} args - Arguments to filter Suppliers to count.
     * @example
     * // Count the number of Suppliers
     * const count = await prisma.supplier.count({
     *   where: {
     *     // ... the filter for the Suppliers we want to count
     *   }
     * })
    **/
    count<T extends SupplierCountArgs>(
      args?: Subset<T, SupplierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupplierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SupplierAggregateArgs>(args: Subset<T, SupplierAggregateArgs>): Prisma.PrismaPromise<GetSupplierAggregateType<T>>

    /**
     * Group by Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SupplierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupplierGroupByArgs['orderBy'] }
        : { orderBy?: SupplierGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SupplierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Supplier model
   */
  readonly fields: SupplierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Supplier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupplierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    receipts<T extends Supplier$receiptsArgs<ExtArgs> = {}>(args?: Subset<T, Supplier$receiptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImportReceiptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Supplier model
   */
  interface SupplierFieldRefs {
    readonly id: FieldRef<"Supplier", 'Int'>
    readonly name: FieldRef<"Supplier", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Supplier findUnique
   */
  export type SupplierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier findUniqueOrThrow
   */
  export type SupplierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier findFirst
   */
  export type SupplierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier findFirstOrThrow
   */
  export type SupplierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier findMany
   */
  export type SupplierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Suppliers to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier create
   */
  export type SupplierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The data needed to create a Supplier.
     */
    data: XOR<SupplierCreateInput, SupplierUncheckedCreateInput>
  }

  /**
   * Supplier createMany
   */
  export type SupplierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Suppliers.
     */
    data: SupplierCreateManyInput | SupplierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Supplier createManyAndReturn
   */
  export type SupplierCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * The data used to create many Suppliers.
     */
    data: SupplierCreateManyInput | SupplierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Supplier update
   */
  export type SupplierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The data needed to update a Supplier.
     */
    data: XOR<SupplierUpdateInput, SupplierUncheckedUpdateInput>
    /**
     * Choose, which Supplier to update.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier updateMany
   */
  export type SupplierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Suppliers.
     */
    data: XOR<SupplierUpdateManyMutationInput, SupplierUncheckedUpdateManyInput>
    /**
     * Filter which Suppliers to update
     */
    where?: SupplierWhereInput
    /**
     * Limit how many Suppliers to update.
     */
    limit?: number
  }

  /**
   * Supplier updateManyAndReturn
   */
  export type SupplierUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * The data used to update Suppliers.
     */
    data: XOR<SupplierUpdateManyMutationInput, SupplierUncheckedUpdateManyInput>
    /**
     * Filter which Suppliers to update
     */
    where?: SupplierWhereInput
    /**
     * Limit how many Suppliers to update.
     */
    limit?: number
  }

  /**
   * Supplier upsert
   */
  export type SupplierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The filter to search for the Supplier to update in case it exists.
     */
    where: SupplierWhereUniqueInput
    /**
     * In case the Supplier found by the `where` argument doesn't exist, create a new Supplier with this data.
     */
    create: XOR<SupplierCreateInput, SupplierUncheckedCreateInput>
    /**
     * In case the Supplier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupplierUpdateInput, SupplierUncheckedUpdateInput>
  }

  /**
   * Supplier delete
   */
  export type SupplierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter which Supplier to delete.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier deleteMany
   */
  export type SupplierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Suppliers to delete
     */
    where?: SupplierWhereInput
    /**
     * Limit how many Suppliers to delete.
     */
    limit?: number
  }

  /**
   * Supplier.receipts
   */
  export type Supplier$receiptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportReceipt
     */
    select?: ImportReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportReceipt
     */
    omit?: ImportReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportReceiptInclude<ExtArgs> | null
    where?: ImportReceiptWhereInput
    orderBy?: ImportReceiptOrderByWithRelationInput | ImportReceiptOrderByWithRelationInput[]
    cursor?: ImportReceiptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImportReceiptScalarFieldEnum | ImportReceiptScalarFieldEnum[]
  }

  /**
   * Supplier without action
   */
  export type SupplierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
  }


  /**
   * Model ImportReceipt
   */

  export type AggregateImportReceipt = {
    _count: ImportReceiptCountAggregateOutputType | null
    _avg: ImportReceiptAvgAggregateOutputType | null
    _sum: ImportReceiptSumAggregateOutputType | null
    _min: ImportReceiptMinAggregateOutputType | null
    _max: ImportReceiptMaxAggregateOutputType | null
  }

  export type ImportReceiptAvgAggregateOutputType = {
    id: number | null
    warehouseId: number | null
    supplierId: number | null
  }

  export type ImportReceiptSumAggregateOutputType = {
    id: number | null
    warehouseId: number | null
    supplierId: number | null
  }

  export type ImportReceiptMinAggregateOutputType = {
    id: number | null
    code: string | null
    date: Date | null
    documentNumber: string | null
    documentDate: Date | null
    createdAt: Date | null
    warehouseId: number | null
    supplierId: number | null
  }

  export type ImportReceiptMaxAggregateOutputType = {
    id: number | null
    code: string | null
    date: Date | null
    documentNumber: string | null
    documentDate: Date | null
    createdAt: Date | null
    warehouseId: number | null
    supplierId: number | null
  }

  export type ImportReceiptCountAggregateOutputType = {
    id: number
    code: number
    date: number
    documentNumber: number
    documentDate: number
    createdAt: number
    warehouseId: number
    supplierId: number
    _all: number
  }


  export type ImportReceiptAvgAggregateInputType = {
    id?: true
    warehouseId?: true
    supplierId?: true
  }

  export type ImportReceiptSumAggregateInputType = {
    id?: true
    warehouseId?: true
    supplierId?: true
  }

  export type ImportReceiptMinAggregateInputType = {
    id?: true
    code?: true
    date?: true
    documentNumber?: true
    documentDate?: true
    createdAt?: true
    warehouseId?: true
    supplierId?: true
  }

  export type ImportReceiptMaxAggregateInputType = {
    id?: true
    code?: true
    date?: true
    documentNumber?: true
    documentDate?: true
    createdAt?: true
    warehouseId?: true
    supplierId?: true
  }

  export type ImportReceiptCountAggregateInputType = {
    id?: true
    code?: true
    date?: true
    documentNumber?: true
    documentDate?: true
    createdAt?: true
    warehouseId?: true
    supplierId?: true
    _all?: true
  }

  export type ImportReceiptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImportReceipt to aggregate.
     */
    where?: ImportReceiptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImportReceipts to fetch.
     */
    orderBy?: ImportReceiptOrderByWithRelationInput | ImportReceiptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImportReceiptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImportReceipts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImportReceipts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ImportReceipts
    **/
    _count?: true | ImportReceiptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImportReceiptAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImportReceiptSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImportReceiptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImportReceiptMaxAggregateInputType
  }

  export type GetImportReceiptAggregateType<T extends ImportReceiptAggregateArgs> = {
        [P in keyof T & keyof AggregateImportReceipt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImportReceipt[P]>
      : GetScalarType<T[P], AggregateImportReceipt[P]>
  }




  export type ImportReceiptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImportReceiptWhereInput
    orderBy?: ImportReceiptOrderByWithAggregationInput | ImportReceiptOrderByWithAggregationInput[]
    by: ImportReceiptScalarFieldEnum[] | ImportReceiptScalarFieldEnum
    having?: ImportReceiptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImportReceiptCountAggregateInputType | true
    _avg?: ImportReceiptAvgAggregateInputType
    _sum?: ImportReceiptSumAggregateInputType
    _min?: ImportReceiptMinAggregateInputType
    _max?: ImportReceiptMaxAggregateInputType
  }

  export type ImportReceiptGroupByOutputType = {
    id: number
    code: string
    date: Date
    documentNumber: string | null
    documentDate: Date | null
    createdAt: Date
    warehouseId: number
    supplierId: number
    _count: ImportReceiptCountAggregateOutputType | null
    _avg: ImportReceiptAvgAggregateOutputType | null
    _sum: ImportReceiptSumAggregateOutputType | null
    _min: ImportReceiptMinAggregateOutputType | null
    _max: ImportReceiptMaxAggregateOutputType | null
  }

  type GetImportReceiptGroupByPayload<T extends ImportReceiptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImportReceiptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImportReceiptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImportReceiptGroupByOutputType[P]>
            : GetScalarType<T[P], ImportReceiptGroupByOutputType[P]>
        }
      >
    >


  export type ImportReceiptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    date?: boolean
    documentNumber?: boolean
    documentDate?: boolean
    createdAt?: boolean
    warehouseId?: boolean
    supplierId?: boolean
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
    items?: boolean | ImportReceipt$itemsArgs<ExtArgs>
    _count?: boolean | ImportReceiptCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["importReceipt"]>

  export type ImportReceiptSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    date?: boolean
    documentNumber?: boolean
    documentDate?: boolean
    createdAt?: boolean
    warehouseId?: boolean
    supplierId?: boolean
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["importReceipt"]>

  export type ImportReceiptSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    date?: boolean
    documentNumber?: boolean
    documentDate?: boolean
    createdAt?: boolean
    warehouseId?: boolean
    supplierId?: boolean
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["importReceipt"]>

  export type ImportReceiptSelectScalar = {
    id?: boolean
    code?: boolean
    date?: boolean
    documentNumber?: boolean
    documentDate?: boolean
    createdAt?: boolean
    warehouseId?: boolean
    supplierId?: boolean
  }

  export type ImportReceiptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "date" | "documentNumber" | "documentDate" | "createdAt" | "warehouseId" | "supplierId", ExtArgs["result"]["importReceipt"]>
  export type ImportReceiptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
    items?: boolean | ImportReceipt$itemsArgs<ExtArgs>
    _count?: boolean | ImportReceiptCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ImportReceiptIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }
  export type ImportReceiptIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }

  export type $ImportReceiptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ImportReceipt"
    objects: {
      warehouse: Prisma.$WarehousePayload<ExtArgs>
      supplier: Prisma.$SupplierPayload<ExtArgs>
      items: Prisma.$ImportReceiptItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      date: Date
      documentNumber: string | null
      documentDate: Date | null
      createdAt: Date
      warehouseId: number
      supplierId: number
    }, ExtArgs["result"]["importReceipt"]>
    composites: {}
  }

  type ImportReceiptGetPayload<S extends boolean | null | undefined | ImportReceiptDefaultArgs> = $Result.GetResult<Prisma.$ImportReceiptPayload, S>

  type ImportReceiptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImportReceiptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImportReceiptCountAggregateInputType | true
    }

  export interface ImportReceiptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ImportReceipt'], meta: { name: 'ImportReceipt' } }
    /**
     * Find zero or one ImportReceipt that matches the filter.
     * @param {ImportReceiptFindUniqueArgs} args - Arguments to find a ImportReceipt
     * @example
     * // Get one ImportReceipt
     * const importReceipt = await prisma.importReceipt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImportReceiptFindUniqueArgs>(args: SelectSubset<T, ImportReceiptFindUniqueArgs<ExtArgs>>): Prisma__ImportReceiptClient<$Result.GetResult<Prisma.$ImportReceiptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ImportReceipt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImportReceiptFindUniqueOrThrowArgs} args - Arguments to find a ImportReceipt
     * @example
     * // Get one ImportReceipt
     * const importReceipt = await prisma.importReceipt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImportReceiptFindUniqueOrThrowArgs>(args: SelectSubset<T, ImportReceiptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImportReceiptClient<$Result.GetResult<Prisma.$ImportReceiptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImportReceipt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportReceiptFindFirstArgs} args - Arguments to find a ImportReceipt
     * @example
     * // Get one ImportReceipt
     * const importReceipt = await prisma.importReceipt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImportReceiptFindFirstArgs>(args?: SelectSubset<T, ImportReceiptFindFirstArgs<ExtArgs>>): Prisma__ImportReceiptClient<$Result.GetResult<Prisma.$ImportReceiptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImportReceipt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportReceiptFindFirstOrThrowArgs} args - Arguments to find a ImportReceipt
     * @example
     * // Get one ImportReceipt
     * const importReceipt = await prisma.importReceipt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImportReceiptFindFirstOrThrowArgs>(args?: SelectSubset<T, ImportReceiptFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImportReceiptClient<$Result.GetResult<Prisma.$ImportReceiptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ImportReceipts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportReceiptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ImportReceipts
     * const importReceipts = await prisma.importReceipt.findMany()
     * 
     * // Get first 10 ImportReceipts
     * const importReceipts = await prisma.importReceipt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const importReceiptWithIdOnly = await prisma.importReceipt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImportReceiptFindManyArgs>(args?: SelectSubset<T, ImportReceiptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImportReceiptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ImportReceipt.
     * @param {ImportReceiptCreateArgs} args - Arguments to create a ImportReceipt.
     * @example
     * // Create one ImportReceipt
     * const ImportReceipt = await prisma.importReceipt.create({
     *   data: {
     *     // ... data to create a ImportReceipt
     *   }
     * })
     * 
     */
    create<T extends ImportReceiptCreateArgs>(args: SelectSubset<T, ImportReceiptCreateArgs<ExtArgs>>): Prisma__ImportReceiptClient<$Result.GetResult<Prisma.$ImportReceiptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ImportReceipts.
     * @param {ImportReceiptCreateManyArgs} args - Arguments to create many ImportReceipts.
     * @example
     * // Create many ImportReceipts
     * const importReceipt = await prisma.importReceipt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImportReceiptCreateManyArgs>(args?: SelectSubset<T, ImportReceiptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ImportReceipts and returns the data saved in the database.
     * @param {ImportReceiptCreateManyAndReturnArgs} args - Arguments to create many ImportReceipts.
     * @example
     * // Create many ImportReceipts
     * const importReceipt = await prisma.importReceipt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ImportReceipts and only return the `id`
     * const importReceiptWithIdOnly = await prisma.importReceipt.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImportReceiptCreateManyAndReturnArgs>(args?: SelectSubset<T, ImportReceiptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImportReceiptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ImportReceipt.
     * @param {ImportReceiptDeleteArgs} args - Arguments to delete one ImportReceipt.
     * @example
     * // Delete one ImportReceipt
     * const ImportReceipt = await prisma.importReceipt.delete({
     *   where: {
     *     // ... filter to delete one ImportReceipt
     *   }
     * })
     * 
     */
    delete<T extends ImportReceiptDeleteArgs>(args: SelectSubset<T, ImportReceiptDeleteArgs<ExtArgs>>): Prisma__ImportReceiptClient<$Result.GetResult<Prisma.$ImportReceiptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ImportReceipt.
     * @param {ImportReceiptUpdateArgs} args - Arguments to update one ImportReceipt.
     * @example
     * // Update one ImportReceipt
     * const importReceipt = await prisma.importReceipt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImportReceiptUpdateArgs>(args: SelectSubset<T, ImportReceiptUpdateArgs<ExtArgs>>): Prisma__ImportReceiptClient<$Result.GetResult<Prisma.$ImportReceiptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ImportReceipts.
     * @param {ImportReceiptDeleteManyArgs} args - Arguments to filter ImportReceipts to delete.
     * @example
     * // Delete a few ImportReceipts
     * const { count } = await prisma.importReceipt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImportReceiptDeleteManyArgs>(args?: SelectSubset<T, ImportReceiptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImportReceipts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportReceiptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ImportReceipts
     * const importReceipt = await prisma.importReceipt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImportReceiptUpdateManyArgs>(args: SelectSubset<T, ImportReceiptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImportReceipts and returns the data updated in the database.
     * @param {ImportReceiptUpdateManyAndReturnArgs} args - Arguments to update many ImportReceipts.
     * @example
     * // Update many ImportReceipts
     * const importReceipt = await prisma.importReceipt.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ImportReceipts and only return the `id`
     * const importReceiptWithIdOnly = await prisma.importReceipt.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ImportReceiptUpdateManyAndReturnArgs>(args: SelectSubset<T, ImportReceiptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImportReceiptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ImportReceipt.
     * @param {ImportReceiptUpsertArgs} args - Arguments to update or create a ImportReceipt.
     * @example
     * // Update or create a ImportReceipt
     * const importReceipt = await prisma.importReceipt.upsert({
     *   create: {
     *     // ... data to create a ImportReceipt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ImportReceipt we want to update
     *   }
     * })
     */
    upsert<T extends ImportReceiptUpsertArgs>(args: SelectSubset<T, ImportReceiptUpsertArgs<ExtArgs>>): Prisma__ImportReceiptClient<$Result.GetResult<Prisma.$ImportReceiptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ImportReceipts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportReceiptCountArgs} args - Arguments to filter ImportReceipts to count.
     * @example
     * // Count the number of ImportReceipts
     * const count = await prisma.importReceipt.count({
     *   where: {
     *     // ... the filter for the ImportReceipts we want to count
     *   }
     * })
    **/
    count<T extends ImportReceiptCountArgs>(
      args?: Subset<T, ImportReceiptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImportReceiptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ImportReceipt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportReceiptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImportReceiptAggregateArgs>(args: Subset<T, ImportReceiptAggregateArgs>): Prisma.PrismaPromise<GetImportReceiptAggregateType<T>>

    /**
     * Group by ImportReceipt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportReceiptGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ImportReceiptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImportReceiptGroupByArgs['orderBy'] }
        : { orderBy?: ImportReceiptGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ImportReceiptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImportReceiptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ImportReceipt model
   */
  readonly fields: ImportReceiptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ImportReceipt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImportReceiptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    warehouse<T extends WarehouseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WarehouseDefaultArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    supplier<T extends SupplierDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SupplierDefaultArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends ImportReceipt$itemsArgs<ExtArgs> = {}>(args?: Subset<T, ImportReceipt$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImportReceiptItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ImportReceipt model
   */
  interface ImportReceiptFieldRefs {
    readonly id: FieldRef<"ImportReceipt", 'Int'>
    readonly code: FieldRef<"ImportReceipt", 'String'>
    readonly date: FieldRef<"ImportReceipt", 'DateTime'>
    readonly documentNumber: FieldRef<"ImportReceipt", 'String'>
    readonly documentDate: FieldRef<"ImportReceipt", 'DateTime'>
    readonly createdAt: FieldRef<"ImportReceipt", 'DateTime'>
    readonly warehouseId: FieldRef<"ImportReceipt", 'Int'>
    readonly supplierId: FieldRef<"ImportReceipt", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ImportReceipt findUnique
   */
  export type ImportReceiptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportReceipt
     */
    select?: ImportReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportReceipt
     */
    omit?: ImportReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportReceiptInclude<ExtArgs> | null
    /**
     * Filter, which ImportReceipt to fetch.
     */
    where: ImportReceiptWhereUniqueInput
  }

  /**
   * ImportReceipt findUniqueOrThrow
   */
  export type ImportReceiptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportReceipt
     */
    select?: ImportReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportReceipt
     */
    omit?: ImportReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportReceiptInclude<ExtArgs> | null
    /**
     * Filter, which ImportReceipt to fetch.
     */
    where: ImportReceiptWhereUniqueInput
  }

  /**
   * ImportReceipt findFirst
   */
  export type ImportReceiptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportReceipt
     */
    select?: ImportReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportReceipt
     */
    omit?: ImportReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportReceiptInclude<ExtArgs> | null
    /**
     * Filter, which ImportReceipt to fetch.
     */
    where?: ImportReceiptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImportReceipts to fetch.
     */
    orderBy?: ImportReceiptOrderByWithRelationInput | ImportReceiptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImportReceipts.
     */
    cursor?: ImportReceiptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImportReceipts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImportReceipts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImportReceipts.
     */
    distinct?: ImportReceiptScalarFieldEnum | ImportReceiptScalarFieldEnum[]
  }

  /**
   * ImportReceipt findFirstOrThrow
   */
  export type ImportReceiptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportReceipt
     */
    select?: ImportReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportReceipt
     */
    omit?: ImportReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportReceiptInclude<ExtArgs> | null
    /**
     * Filter, which ImportReceipt to fetch.
     */
    where?: ImportReceiptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImportReceipts to fetch.
     */
    orderBy?: ImportReceiptOrderByWithRelationInput | ImportReceiptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImportReceipts.
     */
    cursor?: ImportReceiptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImportReceipts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImportReceipts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImportReceipts.
     */
    distinct?: ImportReceiptScalarFieldEnum | ImportReceiptScalarFieldEnum[]
  }

  /**
   * ImportReceipt findMany
   */
  export type ImportReceiptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportReceipt
     */
    select?: ImportReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportReceipt
     */
    omit?: ImportReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportReceiptInclude<ExtArgs> | null
    /**
     * Filter, which ImportReceipts to fetch.
     */
    where?: ImportReceiptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImportReceipts to fetch.
     */
    orderBy?: ImportReceiptOrderByWithRelationInput | ImportReceiptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ImportReceipts.
     */
    cursor?: ImportReceiptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImportReceipts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImportReceipts.
     */
    skip?: number
    distinct?: ImportReceiptScalarFieldEnum | ImportReceiptScalarFieldEnum[]
  }

  /**
   * ImportReceipt create
   */
  export type ImportReceiptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportReceipt
     */
    select?: ImportReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportReceipt
     */
    omit?: ImportReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportReceiptInclude<ExtArgs> | null
    /**
     * The data needed to create a ImportReceipt.
     */
    data: XOR<ImportReceiptCreateInput, ImportReceiptUncheckedCreateInput>
  }

  /**
   * ImportReceipt createMany
   */
  export type ImportReceiptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ImportReceipts.
     */
    data: ImportReceiptCreateManyInput | ImportReceiptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ImportReceipt createManyAndReturn
   */
  export type ImportReceiptCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportReceipt
     */
    select?: ImportReceiptSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ImportReceipt
     */
    omit?: ImportReceiptOmit<ExtArgs> | null
    /**
     * The data used to create many ImportReceipts.
     */
    data: ImportReceiptCreateManyInput | ImportReceiptCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportReceiptIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ImportReceipt update
   */
  export type ImportReceiptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportReceipt
     */
    select?: ImportReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportReceipt
     */
    omit?: ImportReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportReceiptInclude<ExtArgs> | null
    /**
     * The data needed to update a ImportReceipt.
     */
    data: XOR<ImportReceiptUpdateInput, ImportReceiptUncheckedUpdateInput>
    /**
     * Choose, which ImportReceipt to update.
     */
    where: ImportReceiptWhereUniqueInput
  }

  /**
   * ImportReceipt updateMany
   */
  export type ImportReceiptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ImportReceipts.
     */
    data: XOR<ImportReceiptUpdateManyMutationInput, ImportReceiptUncheckedUpdateManyInput>
    /**
     * Filter which ImportReceipts to update
     */
    where?: ImportReceiptWhereInput
    /**
     * Limit how many ImportReceipts to update.
     */
    limit?: number
  }

  /**
   * ImportReceipt updateManyAndReturn
   */
  export type ImportReceiptUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportReceipt
     */
    select?: ImportReceiptSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ImportReceipt
     */
    omit?: ImportReceiptOmit<ExtArgs> | null
    /**
     * The data used to update ImportReceipts.
     */
    data: XOR<ImportReceiptUpdateManyMutationInput, ImportReceiptUncheckedUpdateManyInput>
    /**
     * Filter which ImportReceipts to update
     */
    where?: ImportReceiptWhereInput
    /**
     * Limit how many ImportReceipts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportReceiptIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ImportReceipt upsert
   */
  export type ImportReceiptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportReceipt
     */
    select?: ImportReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportReceipt
     */
    omit?: ImportReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportReceiptInclude<ExtArgs> | null
    /**
     * The filter to search for the ImportReceipt to update in case it exists.
     */
    where: ImportReceiptWhereUniqueInput
    /**
     * In case the ImportReceipt found by the `where` argument doesn't exist, create a new ImportReceipt with this data.
     */
    create: XOR<ImportReceiptCreateInput, ImportReceiptUncheckedCreateInput>
    /**
     * In case the ImportReceipt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImportReceiptUpdateInput, ImportReceiptUncheckedUpdateInput>
  }

  /**
   * ImportReceipt delete
   */
  export type ImportReceiptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportReceipt
     */
    select?: ImportReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportReceipt
     */
    omit?: ImportReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportReceiptInclude<ExtArgs> | null
    /**
     * Filter which ImportReceipt to delete.
     */
    where: ImportReceiptWhereUniqueInput
  }

  /**
   * ImportReceipt deleteMany
   */
  export type ImportReceiptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImportReceipts to delete
     */
    where?: ImportReceiptWhereInput
    /**
     * Limit how many ImportReceipts to delete.
     */
    limit?: number
  }

  /**
   * ImportReceipt.items
   */
  export type ImportReceipt$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportReceiptItem
     */
    select?: ImportReceiptItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportReceiptItem
     */
    omit?: ImportReceiptItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportReceiptItemInclude<ExtArgs> | null
    where?: ImportReceiptItemWhereInput
    orderBy?: ImportReceiptItemOrderByWithRelationInput | ImportReceiptItemOrderByWithRelationInput[]
    cursor?: ImportReceiptItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImportReceiptItemScalarFieldEnum | ImportReceiptItemScalarFieldEnum[]
  }

  /**
   * ImportReceipt without action
   */
  export type ImportReceiptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportReceipt
     */
    select?: ImportReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportReceipt
     */
    omit?: ImportReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportReceiptInclude<ExtArgs> | null
  }


  /**
   * Model ImportReceiptItem
   */

  export type AggregateImportReceiptItem = {
    _count: ImportReceiptItemCountAggregateOutputType | null
    _avg: ImportReceiptItemAvgAggregateOutputType | null
    _sum: ImportReceiptItemSumAggregateOutputType | null
    _min: ImportReceiptItemMinAggregateOutputType | null
    _max: ImportReceiptItemMaxAggregateOutputType | null
  }

  export type ImportReceiptItemAvgAggregateOutputType = {
    id: number | null
    quantityDoc: Decimal | null
    quantityActual: Decimal | null
    unitPrice: Decimal | null
    amount: Decimal | null
    receiptId: number | null
  }

  export type ImportReceiptItemSumAggregateOutputType = {
    id: number | null
    quantityDoc: Decimal | null
    quantityActual: Decimal | null
    unitPrice: Decimal | null
    amount: Decimal | null
    receiptId: number | null
  }

  export type ImportReceiptItemMinAggregateOutputType = {
    id: number | null
    name: string | null
    model: string | null
    unit: string | null
    quantityDoc: Decimal | null
    quantityActual: Decimal | null
    unitPrice: Decimal | null
    amount: Decimal | null
    receiptId: number | null
  }

  export type ImportReceiptItemMaxAggregateOutputType = {
    id: number | null
    name: string | null
    model: string | null
    unit: string | null
    quantityDoc: Decimal | null
    quantityActual: Decimal | null
    unitPrice: Decimal | null
    amount: Decimal | null
    receiptId: number | null
  }

  export type ImportReceiptItemCountAggregateOutputType = {
    id: number
    name: number
    model: number
    unit: number
    quantityDoc: number
    quantityActual: number
    unitPrice: number
    amount: number
    receiptId: number
    _all: number
  }


  export type ImportReceiptItemAvgAggregateInputType = {
    id?: true
    quantityDoc?: true
    quantityActual?: true
    unitPrice?: true
    amount?: true
    receiptId?: true
  }

  export type ImportReceiptItemSumAggregateInputType = {
    id?: true
    quantityDoc?: true
    quantityActual?: true
    unitPrice?: true
    amount?: true
    receiptId?: true
  }

  export type ImportReceiptItemMinAggregateInputType = {
    id?: true
    name?: true
    model?: true
    unit?: true
    quantityDoc?: true
    quantityActual?: true
    unitPrice?: true
    amount?: true
    receiptId?: true
  }

  export type ImportReceiptItemMaxAggregateInputType = {
    id?: true
    name?: true
    model?: true
    unit?: true
    quantityDoc?: true
    quantityActual?: true
    unitPrice?: true
    amount?: true
    receiptId?: true
  }

  export type ImportReceiptItemCountAggregateInputType = {
    id?: true
    name?: true
    model?: true
    unit?: true
    quantityDoc?: true
    quantityActual?: true
    unitPrice?: true
    amount?: true
    receiptId?: true
    _all?: true
  }

  export type ImportReceiptItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImportReceiptItem to aggregate.
     */
    where?: ImportReceiptItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImportReceiptItems to fetch.
     */
    orderBy?: ImportReceiptItemOrderByWithRelationInput | ImportReceiptItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImportReceiptItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImportReceiptItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImportReceiptItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ImportReceiptItems
    **/
    _count?: true | ImportReceiptItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImportReceiptItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImportReceiptItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImportReceiptItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImportReceiptItemMaxAggregateInputType
  }

  export type GetImportReceiptItemAggregateType<T extends ImportReceiptItemAggregateArgs> = {
        [P in keyof T & keyof AggregateImportReceiptItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImportReceiptItem[P]>
      : GetScalarType<T[P], AggregateImportReceiptItem[P]>
  }




  export type ImportReceiptItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImportReceiptItemWhereInput
    orderBy?: ImportReceiptItemOrderByWithAggregationInput | ImportReceiptItemOrderByWithAggregationInput[]
    by: ImportReceiptItemScalarFieldEnum[] | ImportReceiptItemScalarFieldEnum
    having?: ImportReceiptItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImportReceiptItemCountAggregateInputType | true
    _avg?: ImportReceiptItemAvgAggregateInputType
    _sum?: ImportReceiptItemSumAggregateInputType
    _min?: ImportReceiptItemMinAggregateInputType
    _max?: ImportReceiptItemMaxAggregateInputType
  }

  export type ImportReceiptItemGroupByOutputType = {
    id: number
    name: string
    model: string
    unit: string | null
    quantityDoc: Decimal
    quantityActual: Decimal
    unitPrice: Decimal
    amount: Decimal
    receiptId: number
    _count: ImportReceiptItemCountAggregateOutputType | null
    _avg: ImportReceiptItemAvgAggregateOutputType | null
    _sum: ImportReceiptItemSumAggregateOutputType | null
    _min: ImportReceiptItemMinAggregateOutputType | null
    _max: ImportReceiptItemMaxAggregateOutputType | null
  }

  type GetImportReceiptItemGroupByPayload<T extends ImportReceiptItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImportReceiptItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImportReceiptItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImportReceiptItemGroupByOutputType[P]>
            : GetScalarType<T[P], ImportReceiptItemGroupByOutputType[P]>
        }
      >
    >


  export type ImportReceiptItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    model?: boolean
    unit?: boolean
    quantityDoc?: boolean
    quantityActual?: boolean
    unitPrice?: boolean
    amount?: boolean
    receiptId?: boolean
    receipt?: boolean | ImportReceiptDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["importReceiptItem"]>

  export type ImportReceiptItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    model?: boolean
    unit?: boolean
    quantityDoc?: boolean
    quantityActual?: boolean
    unitPrice?: boolean
    amount?: boolean
    receiptId?: boolean
    receipt?: boolean | ImportReceiptDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["importReceiptItem"]>

  export type ImportReceiptItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    model?: boolean
    unit?: boolean
    quantityDoc?: boolean
    quantityActual?: boolean
    unitPrice?: boolean
    amount?: boolean
    receiptId?: boolean
    receipt?: boolean | ImportReceiptDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["importReceiptItem"]>

  export type ImportReceiptItemSelectScalar = {
    id?: boolean
    name?: boolean
    model?: boolean
    unit?: boolean
    quantityDoc?: boolean
    quantityActual?: boolean
    unitPrice?: boolean
    amount?: boolean
    receiptId?: boolean
  }

  export type ImportReceiptItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "model" | "unit" | "quantityDoc" | "quantityActual" | "unitPrice" | "amount" | "receiptId", ExtArgs["result"]["importReceiptItem"]>
  export type ImportReceiptItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receipt?: boolean | ImportReceiptDefaultArgs<ExtArgs>
  }
  export type ImportReceiptItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receipt?: boolean | ImportReceiptDefaultArgs<ExtArgs>
  }
  export type ImportReceiptItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receipt?: boolean | ImportReceiptDefaultArgs<ExtArgs>
  }

  export type $ImportReceiptItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ImportReceiptItem"
    objects: {
      receipt: Prisma.$ImportReceiptPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      model: string
      unit: string | null
      quantityDoc: Prisma.Decimal
      quantityActual: Prisma.Decimal
      unitPrice: Prisma.Decimal
      amount: Prisma.Decimal
      receiptId: number
    }, ExtArgs["result"]["importReceiptItem"]>
    composites: {}
  }

  type ImportReceiptItemGetPayload<S extends boolean | null | undefined | ImportReceiptItemDefaultArgs> = $Result.GetResult<Prisma.$ImportReceiptItemPayload, S>

  type ImportReceiptItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImportReceiptItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImportReceiptItemCountAggregateInputType | true
    }

  export interface ImportReceiptItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ImportReceiptItem'], meta: { name: 'ImportReceiptItem' } }
    /**
     * Find zero or one ImportReceiptItem that matches the filter.
     * @param {ImportReceiptItemFindUniqueArgs} args - Arguments to find a ImportReceiptItem
     * @example
     * // Get one ImportReceiptItem
     * const importReceiptItem = await prisma.importReceiptItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImportReceiptItemFindUniqueArgs>(args: SelectSubset<T, ImportReceiptItemFindUniqueArgs<ExtArgs>>): Prisma__ImportReceiptItemClient<$Result.GetResult<Prisma.$ImportReceiptItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ImportReceiptItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImportReceiptItemFindUniqueOrThrowArgs} args - Arguments to find a ImportReceiptItem
     * @example
     * // Get one ImportReceiptItem
     * const importReceiptItem = await prisma.importReceiptItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImportReceiptItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ImportReceiptItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImportReceiptItemClient<$Result.GetResult<Prisma.$ImportReceiptItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImportReceiptItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportReceiptItemFindFirstArgs} args - Arguments to find a ImportReceiptItem
     * @example
     * // Get one ImportReceiptItem
     * const importReceiptItem = await prisma.importReceiptItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImportReceiptItemFindFirstArgs>(args?: SelectSubset<T, ImportReceiptItemFindFirstArgs<ExtArgs>>): Prisma__ImportReceiptItemClient<$Result.GetResult<Prisma.$ImportReceiptItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImportReceiptItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportReceiptItemFindFirstOrThrowArgs} args - Arguments to find a ImportReceiptItem
     * @example
     * // Get one ImportReceiptItem
     * const importReceiptItem = await prisma.importReceiptItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImportReceiptItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ImportReceiptItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImportReceiptItemClient<$Result.GetResult<Prisma.$ImportReceiptItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ImportReceiptItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportReceiptItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ImportReceiptItems
     * const importReceiptItems = await prisma.importReceiptItem.findMany()
     * 
     * // Get first 10 ImportReceiptItems
     * const importReceiptItems = await prisma.importReceiptItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const importReceiptItemWithIdOnly = await prisma.importReceiptItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImportReceiptItemFindManyArgs>(args?: SelectSubset<T, ImportReceiptItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImportReceiptItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ImportReceiptItem.
     * @param {ImportReceiptItemCreateArgs} args - Arguments to create a ImportReceiptItem.
     * @example
     * // Create one ImportReceiptItem
     * const ImportReceiptItem = await prisma.importReceiptItem.create({
     *   data: {
     *     // ... data to create a ImportReceiptItem
     *   }
     * })
     * 
     */
    create<T extends ImportReceiptItemCreateArgs>(args: SelectSubset<T, ImportReceiptItemCreateArgs<ExtArgs>>): Prisma__ImportReceiptItemClient<$Result.GetResult<Prisma.$ImportReceiptItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ImportReceiptItems.
     * @param {ImportReceiptItemCreateManyArgs} args - Arguments to create many ImportReceiptItems.
     * @example
     * // Create many ImportReceiptItems
     * const importReceiptItem = await prisma.importReceiptItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImportReceiptItemCreateManyArgs>(args?: SelectSubset<T, ImportReceiptItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ImportReceiptItems and returns the data saved in the database.
     * @param {ImportReceiptItemCreateManyAndReturnArgs} args - Arguments to create many ImportReceiptItems.
     * @example
     * // Create many ImportReceiptItems
     * const importReceiptItem = await prisma.importReceiptItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ImportReceiptItems and only return the `id`
     * const importReceiptItemWithIdOnly = await prisma.importReceiptItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImportReceiptItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ImportReceiptItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImportReceiptItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ImportReceiptItem.
     * @param {ImportReceiptItemDeleteArgs} args - Arguments to delete one ImportReceiptItem.
     * @example
     * // Delete one ImportReceiptItem
     * const ImportReceiptItem = await prisma.importReceiptItem.delete({
     *   where: {
     *     // ... filter to delete one ImportReceiptItem
     *   }
     * })
     * 
     */
    delete<T extends ImportReceiptItemDeleteArgs>(args: SelectSubset<T, ImportReceiptItemDeleteArgs<ExtArgs>>): Prisma__ImportReceiptItemClient<$Result.GetResult<Prisma.$ImportReceiptItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ImportReceiptItem.
     * @param {ImportReceiptItemUpdateArgs} args - Arguments to update one ImportReceiptItem.
     * @example
     * // Update one ImportReceiptItem
     * const importReceiptItem = await prisma.importReceiptItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImportReceiptItemUpdateArgs>(args: SelectSubset<T, ImportReceiptItemUpdateArgs<ExtArgs>>): Prisma__ImportReceiptItemClient<$Result.GetResult<Prisma.$ImportReceiptItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ImportReceiptItems.
     * @param {ImportReceiptItemDeleteManyArgs} args - Arguments to filter ImportReceiptItems to delete.
     * @example
     * // Delete a few ImportReceiptItems
     * const { count } = await prisma.importReceiptItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImportReceiptItemDeleteManyArgs>(args?: SelectSubset<T, ImportReceiptItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImportReceiptItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportReceiptItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ImportReceiptItems
     * const importReceiptItem = await prisma.importReceiptItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImportReceiptItemUpdateManyArgs>(args: SelectSubset<T, ImportReceiptItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImportReceiptItems and returns the data updated in the database.
     * @param {ImportReceiptItemUpdateManyAndReturnArgs} args - Arguments to update many ImportReceiptItems.
     * @example
     * // Update many ImportReceiptItems
     * const importReceiptItem = await prisma.importReceiptItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ImportReceiptItems and only return the `id`
     * const importReceiptItemWithIdOnly = await prisma.importReceiptItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ImportReceiptItemUpdateManyAndReturnArgs>(args: SelectSubset<T, ImportReceiptItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImportReceiptItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ImportReceiptItem.
     * @param {ImportReceiptItemUpsertArgs} args - Arguments to update or create a ImportReceiptItem.
     * @example
     * // Update or create a ImportReceiptItem
     * const importReceiptItem = await prisma.importReceiptItem.upsert({
     *   create: {
     *     // ... data to create a ImportReceiptItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ImportReceiptItem we want to update
     *   }
     * })
     */
    upsert<T extends ImportReceiptItemUpsertArgs>(args: SelectSubset<T, ImportReceiptItemUpsertArgs<ExtArgs>>): Prisma__ImportReceiptItemClient<$Result.GetResult<Prisma.$ImportReceiptItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ImportReceiptItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportReceiptItemCountArgs} args - Arguments to filter ImportReceiptItems to count.
     * @example
     * // Count the number of ImportReceiptItems
     * const count = await prisma.importReceiptItem.count({
     *   where: {
     *     // ... the filter for the ImportReceiptItems we want to count
     *   }
     * })
    **/
    count<T extends ImportReceiptItemCountArgs>(
      args?: Subset<T, ImportReceiptItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImportReceiptItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ImportReceiptItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportReceiptItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImportReceiptItemAggregateArgs>(args: Subset<T, ImportReceiptItemAggregateArgs>): Prisma.PrismaPromise<GetImportReceiptItemAggregateType<T>>

    /**
     * Group by ImportReceiptItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportReceiptItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ImportReceiptItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImportReceiptItemGroupByArgs['orderBy'] }
        : { orderBy?: ImportReceiptItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ImportReceiptItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImportReceiptItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ImportReceiptItem model
   */
  readonly fields: ImportReceiptItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ImportReceiptItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImportReceiptItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    receipt<T extends ImportReceiptDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ImportReceiptDefaultArgs<ExtArgs>>): Prisma__ImportReceiptClient<$Result.GetResult<Prisma.$ImportReceiptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ImportReceiptItem model
   */
  interface ImportReceiptItemFieldRefs {
    readonly id: FieldRef<"ImportReceiptItem", 'Int'>
    readonly name: FieldRef<"ImportReceiptItem", 'String'>
    readonly model: FieldRef<"ImportReceiptItem", 'String'>
    readonly unit: FieldRef<"ImportReceiptItem", 'String'>
    readonly quantityDoc: FieldRef<"ImportReceiptItem", 'Decimal'>
    readonly quantityActual: FieldRef<"ImportReceiptItem", 'Decimal'>
    readonly unitPrice: FieldRef<"ImportReceiptItem", 'Decimal'>
    readonly amount: FieldRef<"ImportReceiptItem", 'Decimal'>
    readonly receiptId: FieldRef<"ImportReceiptItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ImportReceiptItem findUnique
   */
  export type ImportReceiptItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportReceiptItem
     */
    select?: ImportReceiptItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportReceiptItem
     */
    omit?: ImportReceiptItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportReceiptItemInclude<ExtArgs> | null
    /**
     * Filter, which ImportReceiptItem to fetch.
     */
    where: ImportReceiptItemWhereUniqueInput
  }

  /**
   * ImportReceiptItem findUniqueOrThrow
   */
  export type ImportReceiptItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportReceiptItem
     */
    select?: ImportReceiptItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportReceiptItem
     */
    omit?: ImportReceiptItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportReceiptItemInclude<ExtArgs> | null
    /**
     * Filter, which ImportReceiptItem to fetch.
     */
    where: ImportReceiptItemWhereUniqueInput
  }

  /**
   * ImportReceiptItem findFirst
   */
  export type ImportReceiptItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportReceiptItem
     */
    select?: ImportReceiptItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportReceiptItem
     */
    omit?: ImportReceiptItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportReceiptItemInclude<ExtArgs> | null
    /**
     * Filter, which ImportReceiptItem to fetch.
     */
    where?: ImportReceiptItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImportReceiptItems to fetch.
     */
    orderBy?: ImportReceiptItemOrderByWithRelationInput | ImportReceiptItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImportReceiptItems.
     */
    cursor?: ImportReceiptItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImportReceiptItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImportReceiptItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImportReceiptItems.
     */
    distinct?: ImportReceiptItemScalarFieldEnum | ImportReceiptItemScalarFieldEnum[]
  }

  /**
   * ImportReceiptItem findFirstOrThrow
   */
  export type ImportReceiptItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportReceiptItem
     */
    select?: ImportReceiptItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportReceiptItem
     */
    omit?: ImportReceiptItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportReceiptItemInclude<ExtArgs> | null
    /**
     * Filter, which ImportReceiptItem to fetch.
     */
    where?: ImportReceiptItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImportReceiptItems to fetch.
     */
    orderBy?: ImportReceiptItemOrderByWithRelationInput | ImportReceiptItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImportReceiptItems.
     */
    cursor?: ImportReceiptItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImportReceiptItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImportReceiptItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImportReceiptItems.
     */
    distinct?: ImportReceiptItemScalarFieldEnum | ImportReceiptItemScalarFieldEnum[]
  }

  /**
   * ImportReceiptItem findMany
   */
  export type ImportReceiptItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportReceiptItem
     */
    select?: ImportReceiptItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportReceiptItem
     */
    omit?: ImportReceiptItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportReceiptItemInclude<ExtArgs> | null
    /**
     * Filter, which ImportReceiptItems to fetch.
     */
    where?: ImportReceiptItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImportReceiptItems to fetch.
     */
    orderBy?: ImportReceiptItemOrderByWithRelationInput | ImportReceiptItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ImportReceiptItems.
     */
    cursor?: ImportReceiptItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImportReceiptItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImportReceiptItems.
     */
    skip?: number
    distinct?: ImportReceiptItemScalarFieldEnum | ImportReceiptItemScalarFieldEnum[]
  }

  /**
   * ImportReceiptItem create
   */
  export type ImportReceiptItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportReceiptItem
     */
    select?: ImportReceiptItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportReceiptItem
     */
    omit?: ImportReceiptItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportReceiptItemInclude<ExtArgs> | null
    /**
     * The data needed to create a ImportReceiptItem.
     */
    data: XOR<ImportReceiptItemCreateInput, ImportReceiptItemUncheckedCreateInput>
  }

  /**
   * ImportReceiptItem createMany
   */
  export type ImportReceiptItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ImportReceiptItems.
     */
    data: ImportReceiptItemCreateManyInput | ImportReceiptItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ImportReceiptItem createManyAndReturn
   */
  export type ImportReceiptItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportReceiptItem
     */
    select?: ImportReceiptItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ImportReceiptItem
     */
    omit?: ImportReceiptItemOmit<ExtArgs> | null
    /**
     * The data used to create many ImportReceiptItems.
     */
    data: ImportReceiptItemCreateManyInput | ImportReceiptItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportReceiptItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ImportReceiptItem update
   */
  export type ImportReceiptItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportReceiptItem
     */
    select?: ImportReceiptItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportReceiptItem
     */
    omit?: ImportReceiptItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportReceiptItemInclude<ExtArgs> | null
    /**
     * The data needed to update a ImportReceiptItem.
     */
    data: XOR<ImportReceiptItemUpdateInput, ImportReceiptItemUncheckedUpdateInput>
    /**
     * Choose, which ImportReceiptItem to update.
     */
    where: ImportReceiptItemWhereUniqueInput
  }

  /**
   * ImportReceiptItem updateMany
   */
  export type ImportReceiptItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ImportReceiptItems.
     */
    data: XOR<ImportReceiptItemUpdateManyMutationInput, ImportReceiptItemUncheckedUpdateManyInput>
    /**
     * Filter which ImportReceiptItems to update
     */
    where?: ImportReceiptItemWhereInput
    /**
     * Limit how many ImportReceiptItems to update.
     */
    limit?: number
  }

  /**
   * ImportReceiptItem updateManyAndReturn
   */
  export type ImportReceiptItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportReceiptItem
     */
    select?: ImportReceiptItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ImportReceiptItem
     */
    omit?: ImportReceiptItemOmit<ExtArgs> | null
    /**
     * The data used to update ImportReceiptItems.
     */
    data: XOR<ImportReceiptItemUpdateManyMutationInput, ImportReceiptItemUncheckedUpdateManyInput>
    /**
     * Filter which ImportReceiptItems to update
     */
    where?: ImportReceiptItemWhereInput
    /**
     * Limit how many ImportReceiptItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportReceiptItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ImportReceiptItem upsert
   */
  export type ImportReceiptItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportReceiptItem
     */
    select?: ImportReceiptItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportReceiptItem
     */
    omit?: ImportReceiptItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportReceiptItemInclude<ExtArgs> | null
    /**
     * The filter to search for the ImportReceiptItem to update in case it exists.
     */
    where: ImportReceiptItemWhereUniqueInput
    /**
     * In case the ImportReceiptItem found by the `where` argument doesn't exist, create a new ImportReceiptItem with this data.
     */
    create: XOR<ImportReceiptItemCreateInput, ImportReceiptItemUncheckedCreateInput>
    /**
     * In case the ImportReceiptItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImportReceiptItemUpdateInput, ImportReceiptItemUncheckedUpdateInput>
  }

  /**
   * ImportReceiptItem delete
   */
  export type ImportReceiptItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportReceiptItem
     */
    select?: ImportReceiptItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportReceiptItem
     */
    omit?: ImportReceiptItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportReceiptItemInclude<ExtArgs> | null
    /**
     * Filter which ImportReceiptItem to delete.
     */
    where: ImportReceiptItemWhereUniqueInput
  }

  /**
   * ImportReceiptItem deleteMany
   */
  export type ImportReceiptItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImportReceiptItems to delete
     */
    where?: ImportReceiptItemWhereInput
    /**
     * Limit how many ImportReceiptItems to delete.
     */
    limit?: number
  }

  /**
   * ImportReceiptItem without action
   */
  export type ImportReceiptItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportReceiptItem
     */
    select?: ImportReceiptItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportReceiptItem
     */
    omit?: ImportReceiptItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportReceiptItemInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const WarehouseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    location: 'location'
  };

  export type WarehouseScalarFieldEnum = (typeof WarehouseScalarFieldEnum)[keyof typeof WarehouseScalarFieldEnum]


  export const SupplierScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type SupplierScalarFieldEnum = (typeof SupplierScalarFieldEnum)[keyof typeof SupplierScalarFieldEnum]


  export const ImportReceiptScalarFieldEnum: {
    id: 'id',
    code: 'code',
    date: 'date',
    documentNumber: 'documentNumber',
    documentDate: 'documentDate',
    createdAt: 'createdAt',
    warehouseId: 'warehouseId',
    supplierId: 'supplierId'
  };

  export type ImportReceiptScalarFieldEnum = (typeof ImportReceiptScalarFieldEnum)[keyof typeof ImportReceiptScalarFieldEnum]


  export const ImportReceiptItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    model: 'model',
    unit: 'unit',
    quantityDoc: 'quantityDoc',
    quantityActual: 'quantityActual',
    unitPrice: 'unitPrice',
    amount: 'amount',
    receiptId: 'receiptId'
  };

  export type ImportReceiptItemScalarFieldEnum = (typeof ImportReceiptItemScalarFieldEnum)[keyof typeof ImportReceiptItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type WarehouseWhereInput = {
    AND?: WarehouseWhereInput | WarehouseWhereInput[]
    OR?: WarehouseWhereInput[]
    NOT?: WarehouseWhereInput | WarehouseWhereInput[]
    id?: IntFilter<"Warehouse"> | number
    name?: StringFilter<"Warehouse"> | string
    location?: StringFilter<"Warehouse"> | string
    receipts?: ImportReceiptListRelationFilter
  }

  export type WarehouseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    receipts?: ImportReceiptOrderByRelationAggregateInput
  }

  export type WarehouseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WarehouseWhereInput | WarehouseWhereInput[]
    OR?: WarehouseWhereInput[]
    NOT?: WarehouseWhereInput | WarehouseWhereInput[]
    name?: StringFilter<"Warehouse"> | string
    location?: StringFilter<"Warehouse"> | string
    receipts?: ImportReceiptListRelationFilter
  }, "id">

  export type WarehouseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    _count?: WarehouseCountOrderByAggregateInput
    _avg?: WarehouseAvgOrderByAggregateInput
    _max?: WarehouseMaxOrderByAggregateInput
    _min?: WarehouseMinOrderByAggregateInput
    _sum?: WarehouseSumOrderByAggregateInput
  }

  export type WarehouseScalarWhereWithAggregatesInput = {
    AND?: WarehouseScalarWhereWithAggregatesInput | WarehouseScalarWhereWithAggregatesInput[]
    OR?: WarehouseScalarWhereWithAggregatesInput[]
    NOT?: WarehouseScalarWhereWithAggregatesInput | WarehouseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Warehouse"> | number
    name?: StringWithAggregatesFilter<"Warehouse"> | string
    location?: StringWithAggregatesFilter<"Warehouse"> | string
  }

  export type SupplierWhereInput = {
    AND?: SupplierWhereInput | SupplierWhereInput[]
    OR?: SupplierWhereInput[]
    NOT?: SupplierWhereInput | SupplierWhereInput[]
    id?: IntFilter<"Supplier"> | number
    name?: StringFilter<"Supplier"> | string
    receipts?: ImportReceiptListRelationFilter
  }

  export type SupplierOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    receipts?: ImportReceiptOrderByRelationAggregateInput
  }

  export type SupplierWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SupplierWhereInput | SupplierWhereInput[]
    OR?: SupplierWhereInput[]
    NOT?: SupplierWhereInput | SupplierWhereInput[]
    name?: StringFilter<"Supplier"> | string
    receipts?: ImportReceiptListRelationFilter
  }, "id">

  export type SupplierOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: SupplierCountOrderByAggregateInput
    _avg?: SupplierAvgOrderByAggregateInput
    _max?: SupplierMaxOrderByAggregateInput
    _min?: SupplierMinOrderByAggregateInput
    _sum?: SupplierSumOrderByAggregateInput
  }

  export type SupplierScalarWhereWithAggregatesInput = {
    AND?: SupplierScalarWhereWithAggregatesInput | SupplierScalarWhereWithAggregatesInput[]
    OR?: SupplierScalarWhereWithAggregatesInput[]
    NOT?: SupplierScalarWhereWithAggregatesInput | SupplierScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Supplier"> | number
    name?: StringWithAggregatesFilter<"Supplier"> | string
  }

  export type ImportReceiptWhereInput = {
    AND?: ImportReceiptWhereInput | ImportReceiptWhereInput[]
    OR?: ImportReceiptWhereInput[]
    NOT?: ImportReceiptWhereInput | ImportReceiptWhereInput[]
    id?: IntFilter<"ImportReceipt"> | number
    code?: StringFilter<"ImportReceipt"> | string
    date?: DateTimeFilter<"ImportReceipt"> | Date | string
    documentNumber?: StringNullableFilter<"ImportReceipt"> | string | null
    documentDate?: DateTimeNullableFilter<"ImportReceipt"> | Date | string | null
    createdAt?: DateTimeFilter<"ImportReceipt"> | Date | string
    warehouseId?: IntFilter<"ImportReceipt"> | number
    supplierId?: IntFilter<"ImportReceipt"> | number
    warehouse?: XOR<WarehouseScalarRelationFilter, WarehouseWhereInput>
    supplier?: XOR<SupplierScalarRelationFilter, SupplierWhereInput>
    items?: ImportReceiptItemListRelationFilter
  }

  export type ImportReceiptOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    date?: SortOrder
    documentNumber?: SortOrderInput | SortOrder
    documentDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    warehouseId?: SortOrder
    supplierId?: SortOrder
    warehouse?: WarehouseOrderByWithRelationInput
    supplier?: SupplierOrderByWithRelationInput
    items?: ImportReceiptItemOrderByRelationAggregateInput
  }

  export type ImportReceiptWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: ImportReceiptWhereInput | ImportReceiptWhereInput[]
    OR?: ImportReceiptWhereInput[]
    NOT?: ImportReceiptWhereInput | ImportReceiptWhereInput[]
    date?: DateTimeFilter<"ImportReceipt"> | Date | string
    documentNumber?: StringNullableFilter<"ImportReceipt"> | string | null
    documentDate?: DateTimeNullableFilter<"ImportReceipt"> | Date | string | null
    createdAt?: DateTimeFilter<"ImportReceipt"> | Date | string
    warehouseId?: IntFilter<"ImportReceipt"> | number
    supplierId?: IntFilter<"ImportReceipt"> | number
    warehouse?: XOR<WarehouseScalarRelationFilter, WarehouseWhereInput>
    supplier?: XOR<SupplierScalarRelationFilter, SupplierWhereInput>
    items?: ImportReceiptItemListRelationFilter
  }, "id" | "code">

  export type ImportReceiptOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    date?: SortOrder
    documentNumber?: SortOrderInput | SortOrder
    documentDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    warehouseId?: SortOrder
    supplierId?: SortOrder
    _count?: ImportReceiptCountOrderByAggregateInput
    _avg?: ImportReceiptAvgOrderByAggregateInput
    _max?: ImportReceiptMaxOrderByAggregateInput
    _min?: ImportReceiptMinOrderByAggregateInput
    _sum?: ImportReceiptSumOrderByAggregateInput
  }

  export type ImportReceiptScalarWhereWithAggregatesInput = {
    AND?: ImportReceiptScalarWhereWithAggregatesInput | ImportReceiptScalarWhereWithAggregatesInput[]
    OR?: ImportReceiptScalarWhereWithAggregatesInput[]
    NOT?: ImportReceiptScalarWhereWithAggregatesInput | ImportReceiptScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ImportReceipt"> | number
    code?: StringWithAggregatesFilter<"ImportReceipt"> | string
    date?: DateTimeWithAggregatesFilter<"ImportReceipt"> | Date | string
    documentNumber?: StringNullableWithAggregatesFilter<"ImportReceipt"> | string | null
    documentDate?: DateTimeNullableWithAggregatesFilter<"ImportReceipt"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ImportReceipt"> | Date | string
    warehouseId?: IntWithAggregatesFilter<"ImportReceipt"> | number
    supplierId?: IntWithAggregatesFilter<"ImportReceipt"> | number
  }

  export type ImportReceiptItemWhereInput = {
    AND?: ImportReceiptItemWhereInput | ImportReceiptItemWhereInput[]
    OR?: ImportReceiptItemWhereInput[]
    NOT?: ImportReceiptItemWhereInput | ImportReceiptItemWhereInput[]
    id?: IntFilter<"ImportReceiptItem"> | number
    name?: StringFilter<"ImportReceiptItem"> | string
    model?: StringFilter<"ImportReceiptItem"> | string
    unit?: StringNullableFilter<"ImportReceiptItem"> | string | null
    quantityDoc?: DecimalFilter<"ImportReceiptItem"> | Decimal | DecimalJsLike | number | string
    quantityActual?: DecimalFilter<"ImportReceiptItem"> | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalFilter<"ImportReceiptItem"> | Decimal | DecimalJsLike | number | string
    amount?: DecimalFilter<"ImportReceiptItem"> | Decimal | DecimalJsLike | number | string
    receiptId?: IntFilter<"ImportReceiptItem"> | number
    receipt?: XOR<ImportReceiptScalarRelationFilter, ImportReceiptWhereInput>
  }

  export type ImportReceiptItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    model?: SortOrder
    unit?: SortOrderInput | SortOrder
    quantityDoc?: SortOrder
    quantityActual?: SortOrder
    unitPrice?: SortOrder
    amount?: SortOrder
    receiptId?: SortOrder
    receipt?: ImportReceiptOrderByWithRelationInput
  }

  export type ImportReceiptItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ImportReceiptItemWhereInput | ImportReceiptItemWhereInput[]
    OR?: ImportReceiptItemWhereInput[]
    NOT?: ImportReceiptItemWhereInput | ImportReceiptItemWhereInput[]
    name?: StringFilter<"ImportReceiptItem"> | string
    model?: StringFilter<"ImportReceiptItem"> | string
    unit?: StringNullableFilter<"ImportReceiptItem"> | string | null
    quantityDoc?: DecimalFilter<"ImportReceiptItem"> | Decimal | DecimalJsLike | number | string
    quantityActual?: DecimalFilter<"ImportReceiptItem"> | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalFilter<"ImportReceiptItem"> | Decimal | DecimalJsLike | number | string
    amount?: DecimalFilter<"ImportReceiptItem"> | Decimal | DecimalJsLike | number | string
    receiptId?: IntFilter<"ImportReceiptItem"> | number
    receipt?: XOR<ImportReceiptScalarRelationFilter, ImportReceiptWhereInput>
  }, "id">

  export type ImportReceiptItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    model?: SortOrder
    unit?: SortOrderInput | SortOrder
    quantityDoc?: SortOrder
    quantityActual?: SortOrder
    unitPrice?: SortOrder
    amount?: SortOrder
    receiptId?: SortOrder
    _count?: ImportReceiptItemCountOrderByAggregateInput
    _avg?: ImportReceiptItemAvgOrderByAggregateInput
    _max?: ImportReceiptItemMaxOrderByAggregateInput
    _min?: ImportReceiptItemMinOrderByAggregateInput
    _sum?: ImportReceiptItemSumOrderByAggregateInput
  }

  export type ImportReceiptItemScalarWhereWithAggregatesInput = {
    AND?: ImportReceiptItemScalarWhereWithAggregatesInput | ImportReceiptItemScalarWhereWithAggregatesInput[]
    OR?: ImportReceiptItemScalarWhereWithAggregatesInput[]
    NOT?: ImportReceiptItemScalarWhereWithAggregatesInput | ImportReceiptItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ImportReceiptItem"> | number
    name?: StringWithAggregatesFilter<"ImportReceiptItem"> | string
    model?: StringWithAggregatesFilter<"ImportReceiptItem"> | string
    unit?: StringNullableWithAggregatesFilter<"ImportReceiptItem"> | string | null
    quantityDoc?: DecimalWithAggregatesFilter<"ImportReceiptItem"> | Decimal | DecimalJsLike | number | string
    quantityActual?: DecimalWithAggregatesFilter<"ImportReceiptItem"> | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalWithAggregatesFilter<"ImportReceiptItem"> | Decimal | DecimalJsLike | number | string
    amount?: DecimalWithAggregatesFilter<"ImportReceiptItem"> | Decimal | DecimalJsLike | number | string
    receiptId?: IntWithAggregatesFilter<"ImportReceiptItem"> | number
  }

  export type WarehouseCreateInput = {
    name: string
    location: string
    receipts?: ImportReceiptCreateNestedManyWithoutWarehouseInput
  }

  export type WarehouseUncheckedCreateInput = {
    id?: number
    name: string
    location: string
    receipts?: ImportReceiptUncheckedCreateNestedManyWithoutWarehouseInput
  }

  export type WarehouseUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    receipts?: ImportReceiptUpdateManyWithoutWarehouseNestedInput
  }

  export type WarehouseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    receipts?: ImportReceiptUncheckedUpdateManyWithoutWarehouseNestedInput
  }

  export type WarehouseCreateManyInput = {
    id?: number
    name: string
    location: string
  }

  export type WarehouseUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
  }

  export type WarehouseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
  }

  export type SupplierCreateInput = {
    name: string
    receipts?: ImportReceiptCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUncheckedCreateInput = {
    id?: number
    name: string
    receipts?: ImportReceiptUncheckedCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    receipts?: ImportReceiptUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    receipts?: ImportReceiptUncheckedUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierCreateManyInput = {
    id?: number
    name: string
  }

  export type SupplierUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SupplierUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ImportReceiptCreateInput = {
    code: string
    date: Date | string
    documentNumber?: string | null
    documentDate?: Date | string | null
    createdAt?: Date | string
    warehouse: WarehouseCreateNestedOneWithoutReceiptsInput
    supplier: SupplierCreateNestedOneWithoutReceiptsInput
    items?: ImportReceiptItemCreateNestedManyWithoutReceiptInput
  }

  export type ImportReceiptUncheckedCreateInput = {
    id?: number
    code: string
    date: Date | string
    documentNumber?: string | null
    documentDate?: Date | string | null
    createdAt?: Date | string
    warehouseId: number
    supplierId: number
    items?: ImportReceiptItemUncheckedCreateNestedManyWithoutReceiptInput
  }

  export type ImportReceiptUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    documentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    documentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    warehouse?: WarehouseUpdateOneRequiredWithoutReceiptsNestedInput
    supplier?: SupplierUpdateOneRequiredWithoutReceiptsNestedInput
    items?: ImportReceiptItemUpdateManyWithoutReceiptNestedInput
  }

  export type ImportReceiptUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    documentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    documentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    warehouseId?: IntFieldUpdateOperationsInput | number
    supplierId?: IntFieldUpdateOperationsInput | number
    items?: ImportReceiptItemUncheckedUpdateManyWithoutReceiptNestedInput
  }

  export type ImportReceiptCreateManyInput = {
    id?: number
    code: string
    date: Date | string
    documentNumber?: string | null
    documentDate?: Date | string | null
    createdAt?: Date | string
    warehouseId: number
    supplierId: number
  }

  export type ImportReceiptUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    documentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    documentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImportReceiptUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    documentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    documentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    warehouseId?: IntFieldUpdateOperationsInput | number
    supplierId?: IntFieldUpdateOperationsInput | number
  }

  export type ImportReceiptItemCreateInput = {
    name: string
    model: string
    unit?: string | null
    quantityDoc: Decimal | DecimalJsLike | number | string
    quantityActual: Decimal | DecimalJsLike | number | string
    unitPrice: Decimal | DecimalJsLike | number | string
    amount: Decimal | DecimalJsLike | number | string
    receipt: ImportReceiptCreateNestedOneWithoutItemsInput
  }

  export type ImportReceiptItemUncheckedCreateInput = {
    id?: number
    name: string
    model: string
    unit?: string | null
    quantityDoc: Decimal | DecimalJsLike | number | string
    quantityActual: Decimal | DecimalJsLike | number | string
    unitPrice: Decimal | DecimalJsLike | number | string
    amount: Decimal | DecimalJsLike | number | string
    receiptId: number
  }

  export type ImportReceiptItemUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    quantityDoc?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantityActual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    receipt?: ImportReceiptUpdateOneRequiredWithoutItemsNestedInput
  }

  export type ImportReceiptItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    quantityDoc?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantityActual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    receiptId?: IntFieldUpdateOperationsInput | number
  }

  export type ImportReceiptItemCreateManyInput = {
    id?: number
    name: string
    model: string
    unit?: string | null
    quantityDoc: Decimal | DecimalJsLike | number | string
    quantityActual: Decimal | DecimalJsLike | number | string
    unitPrice: Decimal | DecimalJsLike | number | string
    amount: Decimal | DecimalJsLike | number | string
    receiptId: number
  }

  export type ImportReceiptItemUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    quantityDoc?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantityActual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ImportReceiptItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    quantityDoc?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantityActual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    receiptId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ImportReceiptListRelationFilter = {
    every?: ImportReceiptWhereInput
    some?: ImportReceiptWhereInput
    none?: ImportReceiptWhereInput
  }

  export type ImportReceiptOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WarehouseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
  }

  export type WarehouseAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type WarehouseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
  }

  export type WarehouseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
  }

  export type WarehouseSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type SupplierCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SupplierAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SupplierMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SupplierMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SupplierSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type WarehouseScalarRelationFilter = {
    is?: WarehouseWhereInput
    isNot?: WarehouseWhereInput
  }

  export type SupplierScalarRelationFilter = {
    is?: SupplierWhereInput
    isNot?: SupplierWhereInput
  }

  export type ImportReceiptItemListRelationFilter = {
    every?: ImportReceiptItemWhereInput
    some?: ImportReceiptItemWhereInput
    none?: ImportReceiptItemWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ImportReceiptItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ImportReceiptCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    date?: SortOrder
    documentNumber?: SortOrder
    documentDate?: SortOrder
    createdAt?: SortOrder
    warehouseId?: SortOrder
    supplierId?: SortOrder
  }

  export type ImportReceiptAvgOrderByAggregateInput = {
    id?: SortOrder
    warehouseId?: SortOrder
    supplierId?: SortOrder
  }

  export type ImportReceiptMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    date?: SortOrder
    documentNumber?: SortOrder
    documentDate?: SortOrder
    createdAt?: SortOrder
    warehouseId?: SortOrder
    supplierId?: SortOrder
  }

  export type ImportReceiptMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    date?: SortOrder
    documentNumber?: SortOrder
    documentDate?: SortOrder
    createdAt?: SortOrder
    warehouseId?: SortOrder
    supplierId?: SortOrder
  }

  export type ImportReceiptSumOrderByAggregateInput = {
    id?: SortOrder
    warehouseId?: SortOrder
    supplierId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type ImportReceiptScalarRelationFilter = {
    is?: ImportReceiptWhereInput
    isNot?: ImportReceiptWhereInput
  }

  export type ImportReceiptItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    model?: SortOrder
    unit?: SortOrder
    quantityDoc?: SortOrder
    quantityActual?: SortOrder
    unitPrice?: SortOrder
    amount?: SortOrder
    receiptId?: SortOrder
  }

  export type ImportReceiptItemAvgOrderByAggregateInput = {
    id?: SortOrder
    quantityDoc?: SortOrder
    quantityActual?: SortOrder
    unitPrice?: SortOrder
    amount?: SortOrder
    receiptId?: SortOrder
  }

  export type ImportReceiptItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    model?: SortOrder
    unit?: SortOrder
    quantityDoc?: SortOrder
    quantityActual?: SortOrder
    unitPrice?: SortOrder
    amount?: SortOrder
    receiptId?: SortOrder
  }

  export type ImportReceiptItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    model?: SortOrder
    unit?: SortOrder
    quantityDoc?: SortOrder
    quantityActual?: SortOrder
    unitPrice?: SortOrder
    amount?: SortOrder
    receiptId?: SortOrder
  }

  export type ImportReceiptItemSumOrderByAggregateInput = {
    id?: SortOrder
    quantityDoc?: SortOrder
    quantityActual?: SortOrder
    unitPrice?: SortOrder
    amount?: SortOrder
    receiptId?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type ImportReceiptCreateNestedManyWithoutWarehouseInput = {
    create?: XOR<ImportReceiptCreateWithoutWarehouseInput, ImportReceiptUncheckedCreateWithoutWarehouseInput> | ImportReceiptCreateWithoutWarehouseInput[] | ImportReceiptUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: ImportReceiptCreateOrConnectWithoutWarehouseInput | ImportReceiptCreateOrConnectWithoutWarehouseInput[]
    createMany?: ImportReceiptCreateManyWarehouseInputEnvelope
    connect?: ImportReceiptWhereUniqueInput | ImportReceiptWhereUniqueInput[]
  }

  export type ImportReceiptUncheckedCreateNestedManyWithoutWarehouseInput = {
    create?: XOR<ImportReceiptCreateWithoutWarehouseInput, ImportReceiptUncheckedCreateWithoutWarehouseInput> | ImportReceiptCreateWithoutWarehouseInput[] | ImportReceiptUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: ImportReceiptCreateOrConnectWithoutWarehouseInput | ImportReceiptCreateOrConnectWithoutWarehouseInput[]
    createMany?: ImportReceiptCreateManyWarehouseInputEnvelope
    connect?: ImportReceiptWhereUniqueInput | ImportReceiptWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ImportReceiptUpdateManyWithoutWarehouseNestedInput = {
    create?: XOR<ImportReceiptCreateWithoutWarehouseInput, ImportReceiptUncheckedCreateWithoutWarehouseInput> | ImportReceiptCreateWithoutWarehouseInput[] | ImportReceiptUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: ImportReceiptCreateOrConnectWithoutWarehouseInput | ImportReceiptCreateOrConnectWithoutWarehouseInput[]
    upsert?: ImportReceiptUpsertWithWhereUniqueWithoutWarehouseInput | ImportReceiptUpsertWithWhereUniqueWithoutWarehouseInput[]
    createMany?: ImportReceiptCreateManyWarehouseInputEnvelope
    set?: ImportReceiptWhereUniqueInput | ImportReceiptWhereUniqueInput[]
    disconnect?: ImportReceiptWhereUniqueInput | ImportReceiptWhereUniqueInput[]
    delete?: ImportReceiptWhereUniqueInput | ImportReceiptWhereUniqueInput[]
    connect?: ImportReceiptWhereUniqueInput | ImportReceiptWhereUniqueInput[]
    update?: ImportReceiptUpdateWithWhereUniqueWithoutWarehouseInput | ImportReceiptUpdateWithWhereUniqueWithoutWarehouseInput[]
    updateMany?: ImportReceiptUpdateManyWithWhereWithoutWarehouseInput | ImportReceiptUpdateManyWithWhereWithoutWarehouseInput[]
    deleteMany?: ImportReceiptScalarWhereInput | ImportReceiptScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ImportReceiptUncheckedUpdateManyWithoutWarehouseNestedInput = {
    create?: XOR<ImportReceiptCreateWithoutWarehouseInput, ImportReceiptUncheckedCreateWithoutWarehouseInput> | ImportReceiptCreateWithoutWarehouseInput[] | ImportReceiptUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: ImportReceiptCreateOrConnectWithoutWarehouseInput | ImportReceiptCreateOrConnectWithoutWarehouseInput[]
    upsert?: ImportReceiptUpsertWithWhereUniqueWithoutWarehouseInput | ImportReceiptUpsertWithWhereUniqueWithoutWarehouseInput[]
    createMany?: ImportReceiptCreateManyWarehouseInputEnvelope
    set?: ImportReceiptWhereUniqueInput | ImportReceiptWhereUniqueInput[]
    disconnect?: ImportReceiptWhereUniqueInput | ImportReceiptWhereUniqueInput[]
    delete?: ImportReceiptWhereUniqueInput | ImportReceiptWhereUniqueInput[]
    connect?: ImportReceiptWhereUniqueInput | ImportReceiptWhereUniqueInput[]
    update?: ImportReceiptUpdateWithWhereUniqueWithoutWarehouseInput | ImportReceiptUpdateWithWhereUniqueWithoutWarehouseInput[]
    updateMany?: ImportReceiptUpdateManyWithWhereWithoutWarehouseInput | ImportReceiptUpdateManyWithWhereWithoutWarehouseInput[]
    deleteMany?: ImportReceiptScalarWhereInput | ImportReceiptScalarWhereInput[]
  }

  export type ImportReceiptCreateNestedManyWithoutSupplierInput = {
    create?: XOR<ImportReceiptCreateWithoutSupplierInput, ImportReceiptUncheckedCreateWithoutSupplierInput> | ImportReceiptCreateWithoutSupplierInput[] | ImportReceiptUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: ImportReceiptCreateOrConnectWithoutSupplierInput | ImportReceiptCreateOrConnectWithoutSupplierInput[]
    createMany?: ImportReceiptCreateManySupplierInputEnvelope
    connect?: ImportReceiptWhereUniqueInput | ImportReceiptWhereUniqueInput[]
  }

  export type ImportReceiptUncheckedCreateNestedManyWithoutSupplierInput = {
    create?: XOR<ImportReceiptCreateWithoutSupplierInput, ImportReceiptUncheckedCreateWithoutSupplierInput> | ImportReceiptCreateWithoutSupplierInput[] | ImportReceiptUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: ImportReceiptCreateOrConnectWithoutSupplierInput | ImportReceiptCreateOrConnectWithoutSupplierInput[]
    createMany?: ImportReceiptCreateManySupplierInputEnvelope
    connect?: ImportReceiptWhereUniqueInput | ImportReceiptWhereUniqueInput[]
  }

  export type ImportReceiptUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<ImportReceiptCreateWithoutSupplierInput, ImportReceiptUncheckedCreateWithoutSupplierInput> | ImportReceiptCreateWithoutSupplierInput[] | ImportReceiptUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: ImportReceiptCreateOrConnectWithoutSupplierInput | ImportReceiptCreateOrConnectWithoutSupplierInput[]
    upsert?: ImportReceiptUpsertWithWhereUniqueWithoutSupplierInput | ImportReceiptUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: ImportReceiptCreateManySupplierInputEnvelope
    set?: ImportReceiptWhereUniqueInput | ImportReceiptWhereUniqueInput[]
    disconnect?: ImportReceiptWhereUniqueInput | ImportReceiptWhereUniqueInput[]
    delete?: ImportReceiptWhereUniqueInput | ImportReceiptWhereUniqueInput[]
    connect?: ImportReceiptWhereUniqueInput | ImportReceiptWhereUniqueInput[]
    update?: ImportReceiptUpdateWithWhereUniqueWithoutSupplierInput | ImportReceiptUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: ImportReceiptUpdateManyWithWhereWithoutSupplierInput | ImportReceiptUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: ImportReceiptScalarWhereInput | ImportReceiptScalarWhereInput[]
  }

  export type ImportReceiptUncheckedUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<ImportReceiptCreateWithoutSupplierInput, ImportReceiptUncheckedCreateWithoutSupplierInput> | ImportReceiptCreateWithoutSupplierInput[] | ImportReceiptUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: ImportReceiptCreateOrConnectWithoutSupplierInput | ImportReceiptCreateOrConnectWithoutSupplierInput[]
    upsert?: ImportReceiptUpsertWithWhereUniqueWithoutSupplierInput | ImportReceiptUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: ImportReceiptCreateManySupplierInputEnvelope
    set?: ImportReceiptWhereUniqueInput | ImportReceiptWhereUniqueInput[]
    disconnect?: ImportReceiptWhereUniqueInput | ImportReceiptWhereUniqueInput[]
    delete?: ImportReceiptWhereUniqueInput | ImportReceiptWhereUniqueInput[]
    connect?: ImportReceiptWhereUniqueInput | ImportReceiptWhereUniqueInput[]
    update?: ImportReceiptUpdateWithWhereUniqueWithoutSupplierInput | ImportReceiptUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: ImportReceiptUpdateManyWithWhereWithoutSupplierInput | ImportReceiptUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: ImportReceiptScalarWhereInput | ImportReceiptScalarWhereInput[]
  }

  export type WarehouseCreateNestedOneWithoutReceiptsInput = {
    create?: XOR<WarehouseCreateWithoutReceiptsInput, WarehouseUncheckedCreateWithoutReceiptsInput>
    connectOrCreate?: WarehouseCreateOrConnectWithoutReceiptsInput
    connect?: WarehouseWhereUniqueInput
  }

  export type SupplierCreateNestedOneWithoutReceiptsInput = {
    create?: XOR<SupplierCreateWithoutReceiptsInput, SupplierUncheckedCreateWithoutReceiptsInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutReceiptsInput
    connect?: SupplierWhereUniqueInput
  }

  export type ImportReceiptItemCreateNestedManyWithoutReceiptInput = {
    create?: XOR<ImportReceiptItemCreateWithoutReceiptInput, ImportReceiptItemUncheckedCreateWithoutReceiptInput> | ImportReceiptItemCreateWithoutReceiptInput[] | ImportReceiptItemUncheckedCreateWithoutReceiptInput[]
    connectOrCreate?: ImportReceiptItemCreateOrConnectWithoutReceiptInput | ImportReceiptItemCreateOrConnectWithoutReceiptInput[]
    createMany?: ImportReceiptItemCreateManyReceiptInputEnvelope
    connect?: ImportReceiptItemWhereUniqueInput | ImportReceiptItemWhereUniqueInput[]
  }

  export type ImportReceiptItemUncheckedCreateNestedManyWithoutReceiptInput = {
    create?: XOR<ImportReceiptItemCreateWithoutReceiptInput, ImportReceiptItemUncheckedCreateWithoutReceiptInput> | ImportReceiptItemCreateWithoutReceiptInput[] | ImportReceiptItemUncheckedCreateWithoutReceiptInput[]
    connectOrCreate?: ImportReceiptItemCreateOrConnectWithoutReceiptInput | ImportReceiptItemCreateOrConnectWithoutReceiptInput[]
    createMany?: ImportReceiptItemCreateManyReceiptInputEnvelope
    connect?: ImportReceiptItemWhereUniqueInput | ImportReceiptItemWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type WarehouseUpdateOneRequiredWithoutReceiptsNestedInput = {
    create?: XOR<WarehouseCreateWithoutReceiptsInput, WarehouseUncheckedCreateWithoutReceiptsInput>
    connectOrCreate?: WarehouseCreateOrConnectWithoutReceiptsInput
    upsert?: WarehouseUpsertWithoutReceiptsInput
    connect?: WarehouseWhereUniqueInput
    update?: XOR<XOR<WarehouseUpdateToOneWithWhereWithoutReceiptsInput, WarehouseUpdateWithoutReceiptsInput>, WarehouseUncheckedUpdateWithoutReceiptsInput>
  }

  export type SupplierUpdateOneRequiredWithoutReceiptsNestedInput = {
    create?: XOR<SupplierCreateWithoutReceiptsInput, SupplierUncheckedCreateWithoutReceiptsInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutReceiptsInput
    upsert?: SupplierUpsertWithoutReceiptsInput
    connect?: SupplierWhereUniqueInput
    update?: XOR<XOR<SupplierUpdateToOneWithWhereWithoutReceiptsInput, SupplierUpdateWithoutReceiptsInput>, SupplierUncheckedUpdateWithoutReceiptsInput>
  }

  export type ImportReceiptItemUpdateManyWithoutReceiptNestedInput = {
    create?: XOR<ImportReceiptItemCreateWithoutReceiptInput, ImportReceiptItemUncheckedCreateWithoutReceiptInput> | ImportReceiptItemCreateWithoutReceiptInput[] | ImportReceiptItemUncheckedCreateWithoutReceiptInput[]
    connectOrCreate?: ImportReceiptItemCreateOrConnectWithoutReceiptInput | ImportReceiptItemCreateOrConnectWithoutReceiptInput[]
    upsert?: ImportReceiptItemUpsertWithWhereUniqueWithoutReceiptInput | ImportReceiptItemUpsertWithWhereUniqueWithoutReceiptInput[]
    createMany?: ImportReceiptItemCreateManyReceiptInputEnvelope
    set?: ImportReceiptItemWhereUniqueInput | ImportReceiptItemWhereUniqueInput[]
    disconnect?: ImportReceiptItemWhereUniqueInput | ImportReceiptItemWhereUniqueInput[]
    delete?: ImportReceiptItemWhereUniqueInput | ImportReceiptItemWhereUniqueInput[]
    connect?: ImportReceiptItemWhereUniqueInput | ImportReceiptItemWhereUniqueInput[]
    update?: ImportReceiptItemUpdateWithWhereUniqueWithoutReceiptInput | ImportReceiptItemUpdateWithWhereUniqueWithoutReceiptInput[]
    updateMany?: ImportReceiptItemUpdateManyWithWhereWithoutReceiptInput | ImportReceiptItemUpdateManyWithWhereWithoutReceiptInput[]
    deleteMany?: ImportReceiptItemScalarWhereInput | ImportReceiptItemScalarWhereInput[]
  }

  export type ImportReceiptItemUncheckedUpdateManyWithoutReceiptNestedInput = {
    create?: XOR<ImportReceiptItemCreateWithoutReceiptInput, ImportReceiptItemUncheckedCreateWithoutReceiptInput> | ImportReceiptItemCreateWithoutReceiptInput[] | ImportReceiptItemUncheckedCreateWithoutReceiptInput[]
    connectOrCreate?: ImportReceiptItemCreateOrConnectWithoutReceiptInput | ImportReceiptItemCreateOrConnectWithoutReceiptInput[]
    upsert?: ImportReceiptItemUpsertWithWhereUniqueWithoutReceiptInput | ImportReceiptItemUpsertWithWhereUniqueWithoutReceiptInput[]
    createMany?: ImportReceiptItemCreateManyReceiptInputEnvelope
    set?: ImportReceiptItemWhereUniqueInput | ImportReceiptItemWhereUniqueInput[]
    disconnect?: ImportReceiptItemWhereUniqueInput | ImportReceiptItemWhereUniqueInput[]
    delete?: ImportReceiptItemWhereUniqueInput | ImportReceiptItemWhereUniqueInput[]
    connect?: ImportReceiptItemWhereUniqueInput | ImportReceiptItemWhereUniqueInput[]
    update?: ImportReceiptItemUpdateWithWhereUniqueWithoutReceiptInput | ImportReceiptItemUpdateWithWhereUniqueWithoutReceiptInput[]
    updateMany?: ImportReceiptItemUpdateManyWithWhereWithoutReceiptInput | ImportReceiptItemUpdateManyWithWhereWithoutReceiptInput[]
    deleteMany?: ImportReceiptItemScalarWhereInput | ImportReceiptItemScalarWhereInput[]
  }

  export type ImportReceiptCreateNestedOneWithoutItemsInput = {
    create?: XOR<ImportReceiptCreateWithoutItemsInput, ImportReceiptUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ImportReceiptCreateOrConnectWithoutItemsInput
    connect?: ImportReceiptWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type ImportReceiptUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<ImportReceiptCreateWithoutItemsInput, ImportReceiptUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ImportReceiptCreateOrConnectWithoutItemsInput
    upsert?: ImportReceiptUpsertWithoutItemsInput
    connect?: ImportReceiptWhereUniqueInput
    update?: XOR<XOR<ImportReceiptUpdateToOneWithWhereWithoutItemsInput, ImportReceiptUpdateWithoutItemsInput>, ImportReceiptUncheckedUpdateWithoutItemsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type ImportReceiptCreateWithoutWarehouseInput = {
    code: string
    date: Date | string
    documentNumber?: string | null
    documentDate?: Date | string | null
    createdAt?: Date | string
    supplier: SupplierCreateNestedOneWithoutReceiptsInput
    items?: ImportReceiptItemCreateNestedManyWithoutReceiptInput
  }

  export type ImportReceiptUncheckedCreateWithoutWarehouseInput = {
    id?: number
    code: string
    date: Date | string
    documentNumber?: string | null
    documentDate?: Date | string | null
    createdAt?: Date | string
    supplierId: number
    items?: ImportReceiptItemUncheckedCreateNestedManyWithoutReceiptInput
  }

  export type ImportReceiptCreateOrConnectWithoutWarehouseInput = {
    where: ImportReceiptWhereUniqueInput
    create: XOR<ImportReceiptCreateWithoutWarehouseInput, ImportReceiptUncheckedCreateWithoutWarehouseInput>
  }

  export type ImportReceiptCreateManyWarehouseInputEnvelope = {
    data: ImportReceiptCreateManyWarehouseInput | ImportReceiptCreateManyWarehouseInput[]
    skipDuplicates?: boolean
  }

  export type ImportReceiptUpsertWithWhereUniqueWithoutWarehouseInput = {
    where: ImportReceiptWhereUniqueInput
    update: XOR<ImportReceiptUpdateWithoutWarehouseInput, ImportReceiptUncheckedUpdateWithoutWarehouseInput>
    create: XOR<ImportReceiptCreateWithoutWarehouseInput, ImportReceiptUncheckedCreateWithoutWarehouseInput>
  }

  export type ImportReceiptUpdateWithWhereUniqueWithoutWarehouseInput = {
    where: ImportReceiptWhereUniqueInput
    data: XOR<ImportReceiptUpdateWithoutWarehouseInput, ImportReceiptUncheckedUpdateWithoutWarehouseInput>
  }

  export type ImportReceiptUpdateManyWithWhereWithoutWarehouseInput = {
    where: ImportReceiptScalarWhereInput
    data: XOR<ImportReceiptUpdateManyMutationInput, ImportReceiptUncheckedUpdateManyWithoutWarehouseInput>
  }

  export type ImportReceiptScalarWhereInput = {
    AND?: ImportReceiptScalarWhereInput | ImportReceiptScalarWhereInput[]
    OR?: ImportReceiptScalarWhereInput[]
    NOT?: ImportReceiptScalarWhereInput | ImportReceiptScalarWhereInput[]
    id?: IntFilter<"ImportReceipt"> | number
    code?: StringFilter<"ImportReceipt"> | string
    date?: DateTimeFilter<"ImportReceipt"> | Date | string
    documentNumber?: StringNullableFilter<"ImportReceipt"> | string | null
    documentDate?: DateTimeNullableFilter<"ImportReceipt"> | Date | string | null
    createdAt?: DateTimeFilter<"ImportReceipt"> | Date | string
    warehouseId?: IntFilter<"ImportReceipt"> | number
    supplierId?: IntFilter<"ImportReceipt"> | number
  }

  export type ImportReceiptCreateWithoutSupplierInput = {
    code: string
    date: Date | string
    documentNumber?: string | null
    documentDate?: Date | string | null
    createdAt?: Date | string
    warehouse: WarehouseCreateNestedOneWithoutReceiptsInput
    items?: ImportReceiptItemCreateNestedManyWithoutReceiptInput
  }

  export type ImportReceiptUncheckedCreateWithoutSupplierInput = {
    id?: number
    code: string
    date: Date | string
    documentNumber?: string | null
    documentDate?: Date | string | null
    createdAt?: Date | string
    warehouseId: number
    items?: ImportReceiptItemUncheckedCreateNestedManyWithoutReceiptInput
  }

  export type ImportReceiptCreateOrConnectWithoutSupplierInput = {
    where: ImportReceiptWhereUniqueInput
    create: XOR<ImportReceiptCreateWithoutSupplierInput, ImportReceiptUncheckedCreateWithoutSupplierInput>
  }

  export type ImportReceiptCreateManySupplierInputEnvelope = {
    data: ImportReceiptCreateManySupplierInput | ImportReceiptCreateManySupplierInput[]
    skipDuplicates?: boolean
  }

  export type ImportReceiptUpsertWithWhereUniqueWithoutSupplierInput = {
    where: ImportReceiptWhereUniqueInput
    update: XOR<ImportReceiptUpdateWithoutSupplierInput, ImportReceiptUncheckedUpdateWithoutSupplierInput>
    create: XOR<ImportReceiptCreateWithoutSupplierInput, ImportReceiptUncheckedCreateWithoutSupplierInput>
  }

  export type ImportReceiptUpdateWithWhereUniqueWithoutSupplierInput = {
    where: ImportReceiptWhereUniqueInput
    data: XOR<ImportReceiptUpdateWithoutSupplierInput, ImportReceiptUncheckedUpdateWithoutSupplierInput>
  }

  export type ImportReceiptUpdateManyWithWhereWithoutSupplierInput = {
    where: ImportReceiptScalarWhereInput
    data: XOR<ImportReceiptUpdateManyMutationInput, ImportReceiptUncheckedUpdateManyWithoutSupplierInput>
  }

  export type WarehouseCreateWithoutReceiptsInput = {
    name: string
    location: string
  }

  export type WarehouseUncheckedCreateWithoutReceiptsInput = {
    id?: number
    name: string
    location: string
  }

  export type WarehouseCreateOrConnectWithoutReceiptsInput = {
    where: WarehouseWhereUniqueInput
    create: XOR<WarehouseCreateWithoutReceiptsInput, WarehouseUncheckedCreateWithoutReceiptsInput>
  }

  export type SupplierCreateWithoutReceiptsInput = {
    name: string
  }

  export type SupplierUncheckedCreateWithoutReceiptsInput = {
    id?: number
    name: string
  }

  export type SupplierCreateOrConnectWithoutReceiptsInput = {
    where: SupplierWhereUniqueInput
    create: XOR<SupplierCreateWithoutReceiptsInput, SupplierUncheckedCreateWithoutReceiptsInput>
  }

  export type ImportReceiptItemCreateWithoutReceiptInput = {
    name: string
    model: string
    unit?: string | null
    quantityDoc: Decimal | DecimalJsLike | number | string
    quantityActual: Decimal | DecimalJsLike | number | string
    unitPrice: Decimal | DecimalJsLike | number | string
    amount: Decimal | DecimalJsLike | number | string
  }

  export type ImportReceiptItemUncheckedCreateWithoutReceiptInput = {
    id?: number
    name: string
    model: string
    unit?: string | null
    quantityDoc: Decimal | DecimalJsLike | number | string
    quantityActual: Decimal | DecimalJsLike | number | string
    unitPrice: Decimal | DecimalJsLike | number | string
    amount: Decimal | DecimalJsLike | number | string
  }

  export type ImportReceiptItemCreateOrConnectWithoutReceiptInput = {
    where: ImportReceiptItemWhereUniqueInput
    create: XOR<ImportReceiptItemCreateWithoutReceiptInput, ImportReceiptItemUncheckedCreateWithoutReceiptInput>
  }

  export type ImportReceiptItemCreateManyReceiptInputEnvelope = {
    data: ImportReceiptItemCreateManyReceiptInput | ImportReceiptItemCreateManyReceiptInput[]
    skipDuplicates?: boolean
  }

  export type WarehouseUpsertWithoutReceiptsInput = {
    update: XOR<WarehouseUpdateWithoutReceiptsInput, WarehouseUncheckedUpdateWithoutReceiptsInput>
    create: XOR<WarehouseCreateWithoutReceiptsInput, WarehouseUncheckedCreateWithoutReceiptsInput>
    where?: WarehouseWhereInput
  }

  export type WarehouseUpdateToOneWithWhereWithoutReceiptsInput = {
    where?: WarehouseWhereInput
    data: XOR<WarehouseUpdateWithoutReceiptsInput, WarehouseUncheckedUpdateWithoutReceiptsInput>
  }

  export type WarehouseUpdateWithoutReceiptsInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
  }

  export type WarehouseUncheckedUpdateWithoutReceiptsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
  }

  export type SupplierUpsertWithoutReceiptsInput = {
    update: XOR<SupplierUpdateWithoutReceiptsInput, SupplierUncheckedUpdateWithoutReceiptsInput>
    create: XOR<SupplierCreateWithoutReceiptsInput, SupplierUncheckedCreateWithoutReceiptsInput>
    where?: SupplierWhereInput
  }

  export type SupplierUpdateToOneWithWhereWithoutReceiptsInput = {
    where?: SupplierWhereInput
    data: XOR<SupplierUpdateWithoutReceiptsInput, SupplierUncheckedUpdateWithoutReceiptsInput>
  }

  export type SupplierUpdateWithoutReceiptsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SupplierUncheckedUpdateWithoutReceiptsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ImportReceiptItemUpsertWithWhereUniqueWithoutReceiptInput = {
    where: ImportReceiptItemWhereUniqueInput
    update: XOR<ImportReceiptItemUpdateWithoutReceiptInput, ImportReceiptItemUncheckedUpdateWithoutReceiptInput>
    create: XOR<ImportReceiptItemCreateWithoutReceiptInput, ImportReceiptItemUncheckedCreateWithoutReceiptInput>
  }

  export type ImportReceiptItemUpdateWithWhereUniqueWithoutReceiptInput = {
    where: ImportReceiptItemWhereUniqueInput
    data: XOR<ImportReceiptItemUpdateWithoutReceiptInput, ImportReceiptItemUncheckedUpdateWithoutReceiptInput>
  }

  export type ImportReceiptItemUpdateManyWithWhereWithoutReceiptInput = {
    where: ImportReceiptItemScalarWhereInput
    data: XOR<ImportReceiptItemUpdateManyMutationInput, ImportReceiptItemUncheckedUpdateManyWithoutReceiptInput>
  }

  export type ImportReceiptItemScalarWhereInput = {
    AND?: ImportReceiptItemScalarWhereInput | ImportReceiptItemScalarWhereInput[]
    OR?: ImportReceiptItemScalarWhereInput[]
    NOT?: ImportReceiptItemScalarWhereInput | ImportReceiptItemScalarWhereInput[]
    id?: IntFilter<"ImportReceiptItem"> | number
    name?: StringFilter<"ImportReceiptItem"> | string
    model?: StringFilter<"ImportReceiptItem"> | string
    unit?: StringNullableFilter<"ImportReceiptItem"> | string | null
    quantityDoc?: DecimalFilter<"ImportReceiptItem"> | Decimal | DecimalJsLike | number | string
    quantityActual?: DecimalFilter<"ImportReceiptItem"> | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalFilter<"ImportReceiptItem"> | Decimal | DecimalJsLike | number | string
    amount?: DecimalFilter<"ImportReceiptItem"> | Decimal | DecimalJsLike | number | string
    receiptId?: IntFilter<"ImportReceiptItem"> | number
  }

  export type ImportReceiptCreateWithoutItemsInput = {
    code: string
    date: Date | string
    documentNumber?: string | null
    documentDate?: Date | string | null
    createdAt?: Date | string
    warehouse: WarehouseCreateNestedOneWithoutReceiptsInput
    supplier: SupplierCreateNestedOneWithoutReceiptsInput
  }

  export type ImportReceiptUncheckedCreateWithoutItemsInput = {
    id?: number
    code: string
    date: Date | string
    documentNumber?: string | null
    documentDate?: Date | string | null
    createdAt?: Date | string
    warehouseId: number
    supplierId: number
  }

  export type ImportReceiptCreateOrConnectWithoutItemsInput = {
    where: ImportReceiptWhereUniqueInput
    create: XOR<ImportReceiptCreateWithoutItemsInput, ImportReceiptUncheckedCreateWithoutItemsInput>
  }

  export type ImportReceiptUpsertWithoutItemsInput = {
    update: XOR<ImportReceiptUpdateWithoutItemsInput, ImportReceiptUncheckedUpdateWithoutItemsInput>
    create: XOR<ImportReceiptCreateWithoutItemsInput, ImportReceiptUncheckedCreateWithoutItemsInput>
    where?: ImportReceiptWhereInput
  }

  export type ImportReceiptUpdateToOneWithWhereWithoutItemsInput = {
    where?: ImportReceiptWhereInput
    data: XOR<ImportReceiptUpdateWithoutItemsInput, ImportReceiptUncheckedUpdateWithoutItemsInput>
  }

  export type ImportReceiptUpdateWithoutItemsInput = {
    code?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    documentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    documentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    warehouse?: WarehouseUpdateOneRequiredWithoutReceiptsNestedInput
    supplier?: SupplierUpdateOneRequiredWithoutReceiptsNestedInput
  }

  export type ImportReceiptUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    documentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    documentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    warehouseId?: IntFieldUpdateOperationsInput | number
    supplierId?: IntFieldUpdateOperationsInput | number
  }

  export type ImportReceiptCreateManyWarehouseInput = {
    id?: number
    code: string
    date: Date | string
    documentNumber?: string | null
    documentDate?: Date | string | null
    createdAt?: Date | string
    supplierId: number
  }

  export type ImportReceiptUpdateWithoutWarehouseInput = {
    code?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    documentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    documentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplier?: SupplierUpdateOneRequiredWithoutReceiptsNestedInput
    items?: ImportReceiptItemUpdateManyWithoutReceiptNestedInput
  }

  export type ImportReceiptUncheckedUpdateWithoutWarehouseInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    documentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    documentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplierId?: IntFieldUpdateOperationsInput | number
    items?: ImportReceiptItemUncheckedUpdateManyWithoutReceiptNestedInput
  }

  export type ImportReceiptUncheckedUpdateManyWithoutWarehouseInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    documentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    documentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplierId?: IntFieldUpdateOperationsInput | number
  }

  export type ImportReceiptCreateManySupplierInput = {
    id?: number
    code: string
    date: Date | string
    documentNumber?: string | null
    documentDate?: Date | string | null
    createdAt?: Date | string
    warehouseId: number
  }

  export type ImportReceiptUpdateWithoutSupplierInput = {
    code?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    documentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    documentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    warehouse?: WarehouseUpdateOneRequiredWithoutReceiptsNestedInput
    items?: ImportReceiptItemUpdateManyWithoutReceiptNestedInput
  }

  export type ImportReceiptUncheckedUpdateWithoutSupplierInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    documentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    documentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    warehouseId?: IntFieldUpdateOperationsInput | number
    items?: ImportReceiptItemUncheckedUpdateManyWithoutReceiptNestedInput
  }

  export type ImportReceiptUncheckedUpdateManyWithoutSupplierInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    documentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    documentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    warehouseId?: IntFieldUpdateOperationsInput | number
  }

  export type ImportReceiptItemCreateManyReceiptInput = {
    id?: number
    name: string
    model: string
    unit?: string | null
    quantityDoc: Decimal | DecimalJsLike | number | string
    quantityActual: Decimal | DecimalJsLike | number | string
    unitPrice: Decimal | DecimalJsLike | number | string
    amount: Decimal | DecimalJsLike | number | string
  }

  export type ImportReceiptItemUpdateWithoutReceiptInput = {
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    quantityDoc?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantityActual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ImportReceiptItemUncheckedUpdateWithoutReceiptInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    quantityDoc?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantityActual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ImportReceiptItemUncheckedUpdateManyWithoutReceiptInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    quantityDoc?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantityActual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}