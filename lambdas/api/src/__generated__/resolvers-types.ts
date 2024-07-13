import { GraphQLResolveInfo } from 'graphql';
import { Context } from '../context/context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Card = {
  __typename?: 'Card';
  id?: Maybe<Scalars['Int']['output']>;
  value?: Maybe<Scalars['Int']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  favouriteCard?: Maybe<Card>;
  unfavouriteCard?: Maybe<Card>;
};


export type MutationFavouriteCardArgs = {
  cardId: Scalars['Int']['input'];
};


export type MutationUnfavouriteCardArgs = {
  cardId: Scalars['Int']['input'];
};

export type PaginatedCard = {
  __typename?: 'PaginatedCard';
  paginatedData?: Maybe<Array<Maybe<Card>>>;
  paginatedTotal?: Maybe<Scalars['Int']['output']>;
};

export type Query = {
  __typename?: 'Query';
  getAllCards?: Maybe<PaginatedCard>;
  getMyCards?: Maybe<PaginatedCard>;
};


export type QueryGetAllCardsArgs = {
  pageNo: Scalars['Int']['input'];
  perPage: Scalars['Int']['input'];
};


export type QueryGetMyCardsArgs = {
  pageNo: Scalars['Int']['input'];
  perPage: Scalars['Int']['input'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Card: ResolverTypeWrapper<Card>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  PaginatedCard: ResolverTypeWrapper<PaginatedCard>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean']['output'];
  Card: Card;
  Int: Scalars['Int']['output'];
  Mutation: {};
  PaginatedCard: PaginatedCard;
  Query: {};
  String: Scalars['String']['output'];
}>;

export type CardResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Card'] = ResolversParentTypes['Card']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  favouriteCard?: Resolver<Maybe<ResolversTypes['Card']>, ParentType, ContextType, RequireFields<MutationFavouriteCardArgs, 'cardId'>>;
  unfavouriteCard?: Resolver<Maybe<ResolversTypes['Card']>, ParentType, ContextType, RequireFields<MutationUnfavouriteCardArgs, 'cardId'>>;
}>;

export type PaginatedCardResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PaginatedCard'] = ResolversParentTypes['PaginatedCard']> = ResolversObject<{
  paginatedData?: Resolver<Maybe<Array<Maybe<ResolversTypes['Card']>>>, ParentType, ContextType>;
  paginatedTotal?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  getAllCards?: Resolver<Maybe<ResolversTypes['PaginatedCard']>, ParentType, ContextType, RequireFields<QueryGetAllCardsArgs, 'pageNo' | 'perPage'>>;
  getMyCards?: Resolver<Maybe<ResolversTypes['PaginatedCard']>, ParentType, ContextType, RequireFields<QueryGetMyCardsArgs, 'pageNo' | 'perPage'>>;
}>;

export type Resolvers<ContextType = Context> = ResolversObject<{
  Card?: CardResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  PaginatedCard?: PaginatedCardResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
}>;

