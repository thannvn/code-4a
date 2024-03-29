import { HeaderMenuItem, Option } from '@root/interfaces';
import { getTwitterPath } from '@root/utils';

export const WEBSITE_NAME = 'Code4A';

export const DEFAULT_STALE_TIME = 5 * 60 * 1000;
export const DEFAULT_CACHE_TIME = 10 * 60 * 1000;
export const DEBOUNCE_TIME = 700;

export enum Language {
  EN = 'en', // English
  VI = 'vi', // Vietnamese
}

export enum CookieKey {
  LANGUAGE = 'language',
}

export enum LocalStorageKey {
  IsKeepConnect = 'keep-connect',
  Theme = 'theme',
}

export const PAGE_404_PATH = '/404';

export enum TimeZone {
  VIET_NAM = 7,
  UTC = 0,
}

export enum MetamaskRequestMethod {
  SwitchChain = 'wallet_switchEthereumChain',
  AddChain = 'wallet_addEthereumChain',
  Login = 'eth_requestAccounts',
}

export enum Message {
  LOGIN_AGAIN = 'message.loginAgain',
  PROCESSING_ERROR = 'message.processingError',
}

export enum DayjsUnit {
  DAY = 'day',
  WEEK = 'week',
  MONTH = 'month',
  HOURS = 'hours',
  MINUTE = 'minute',
  SECOND = 'second',
}

export enum DateTimeFormat {
  DATE_MONTH = 'MM/DD',
  SLASH_DATE = 'YYYY/MM/DD',
  CROSS_DATE = 'YYYY-MM-DD',
  DATE_TIME = 'MMMM D, YYYY',
  DATE_TIME_NAME = 'MMMM DD, YYYY',
  DATE_TIME_SLASH = 'YYYY/MM/DD HH:mm:ss',
  DATE_HOUR_MINUTE = 'YYYY/MM/DD HH:mm',
  HUMAN_DATE_TIME = 'MMMM D, YYYY h:mm:ss A',
  SLASH_DAY = 'DD/MM/YYYY',
  TIME = 'HH:mm:ss',
  TIME_ZONE = 'ddd, DD MMM YYYY HH:mm:ss [GMT] Z',
}

export enum ColumnType {
  STT = 'stt',
  DATE_TIME = 'dateTime',
  NUMBER = 'number',
  LINK = 'link',
  TAG = 'tag',
  CUSTOMIZE = 'customize',
  AUDIO = 'audio',
  ARRAY_VERTICAL = 'arrayVertical',
  STATUS = 'status',
  ACTION = 'action',
  ROUTER_LINK = 'routerLink',
}

export const ALL_STATUS: Option = { label: 'common.all', value: '' };

export enum RouteKey {
  TWITTER = 'twitter',
  STARKNET = 'starknet',
  ZKSYNC = 'zksync',
}

export const HEADER_MENU: HeaderMenuItem[] = [
  {
    label: 'Twitter',
    href: getTwitterPath(),
    key: RouteKey.TWITTER,
  },
  {
    label: 'Starknet (Coming soon)',
    href: '',
    key: RouteKey.STARKNET,
    disabled: true,
  },
  // {
  //   label: 'zkSync (Coming soon)',
  //   href: '',
  //   key: RouteKey.ZKSYNC,
  //   isDisabled: true,
  // },
];

export const TWITTER_AUTHOR_LINK = 'https://twitter.com/thann199';
