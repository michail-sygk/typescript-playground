type FlattenArrayType<T> = T extends Array<infer U> ? U : T;
