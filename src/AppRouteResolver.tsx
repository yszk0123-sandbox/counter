import { unwrapOrFromUndefinable } from 'option-t/lib/Undefinable/unwrapOr';
import {
  ActionContext,
  Params,
  Route as UniversalRouterRoute,
} from 'universal-router';
import { AppRoutingContext } from './app/app-type';
import { appConfig } from './config/AppConfig';
import { Route } from './routing/routing-type';
import { unwrapUnsafeValue } from './utils/unwrapUnsafeValue';

interface Context
  extends ActionContext<AppRoutingContext, unknown>,
    AppRoutingContext {}

function onEnterRoute(context: Context) {
  const route = unwrapUnsafeValue<UniversalRouterRoute & Route>(context.route);

  document.title = unwrapOrFromUndefinable(route.title, appConfig.title);
}

export function resolveRoute(context: Context, params: Params) {
  if (typeof context.route.action === 'function') {
    onEnterRoute(context);
    return context.route.action(context, params);
  }
  return undefined;
}
