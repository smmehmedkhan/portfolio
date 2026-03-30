import type { AppError, ErrorInfo } from '@/types'

const STATUS_MAP: Record<number, ErrorInfo> = {
  400: {
    code: '400',
    title: 'Bad Request',
    message: 'The request was invalid. Please check your input and try again.',
  },
  401: {
    code: '401',
    title: 'Unauthorized',
    message: 'You need to be authenticated to access this resource.',
  },
  403: {
    code: '403',
    title: 'Access Forbidden',
    message: "You don't have permission to access this resource.",
  },
  404: {
    code: '404',
    title: 'Page Not Found',
    message: "The page you're looking for doesn't exist or has been moved.",
  },
  408: {
    code: '408',
    title: 'Request Timeout',
    message:
      'The request took too long. Please check your connection and try again.',
  },
  429: {
    code: '429',
    title: 'Too Many Requests',
    message:
      "You've made too many requests. Please wait a moment and try again.",
  },
  500: {
    code: '500',
    title: 'Internal Server Error',
    message: 'Something went wrong on our end. Please try again later.',
  },
  502: {
    code: '502',
    title: 'Bad Gateway',
    message:
      'The server received an invalid response. Please try again shortly.',
  },
  503: {
    code: '503',
    title: 'Service Unavailable',
    message: 'The service is temporarily unavailable. Please try again later.',
  },
  504: {
    code: '504',
    title: 'Gateway Timeout',
    message: 'The server took too long to respond. Please try again.',
  },
}

const ERROR_NAME_MAP: Record<string, ErrorInfo> = {
  ChunkLoadError: {
    code: '503',
    title: 'Failed to Load Resource',
    message:
      'A page resource failed to load. Please refresh to get the latest version.',
  },
  TypeError: {
    code: '500',
    title: 'Something Went Wrong',
    message: 'An unexpected type error occurred. Please try again.',
  },
  NetworkError: {
    code: '503',
    title: 'Network Error',
    message: 'Unable to reach the server. Please check your connection.',
  },
}

const FALLBACK: ErrorInfo = {
  code: '500',
  title: 'Something Went Wrong',
  message: 'An unexpected error occurred. Please try again or go back home.',
}

export function resolveErrorInfo(error?: AppError | null): ErrorInfo {
  if (error?.statusCode && STATUS_MAP[error.statusCode]) {
    return STATUS_MAP[error.statusCode]
  }
  if (error?.name && ERROR_NAME_MAP[error.name]) {
    return ERROR_NAME_MAP[error.name]
  }
  return FALLBACK
}
