import { send } from './dispatcher'
import { localize } from './localizer'

const error = {
  BAD_REQUEST: {
    invariant: 'Bad request',
    code: 'NXE-GRUWLD',
    statusCode: 400,
    send,
    localize
  },
  ERROR_PROCESSING_REQUEST: {
    invariant: 'An error occurred while processing your request',
    code: 'NXE-T0U7GC',
    statusCode: 500,
    send,
    localize
  },
  REQUEST_LIMIT_EXCEEDED: {
    invariant: 'Request limit exceeded. Please wait a few minutes before trying again.',
    code: 'NXE-3MZ2PL',
    statusCode: 429,
    send,
    localize
  }
}

const warning = {
  ACCESS_DENIED: {
    invariant: 'Access is denied',
    code: 'NXW-KO8BF3',
    statusCode: 401,
    send,
    localize
  },
  RESOURCE_NOT_FOUND: {
    invariant: 'Could not find the resource',
    code: 'NXW-O3KFG8',
    statusCode: 404,
    send,
    localize
  },
  DOCUMENT_NOT_FOUND: {
    invariant: 'Could not find the document',
    code: 'NXW-WD09KR',
    statusCode: 404,
    send,
    localize
  },
  COULD_NOT_COMPLETE_REQUEST: {
    invariant: 'Could not complete this request.',
    code: 'NXW-U478DK',
    statusCode: 500,
    send,
    localize
  },
  ZERO_ADDRESS_INVALID: {
    invariant: 'Please specify a valid address instead of 0x0',
    code: 'NXW-0W73BI',
    statusCode: 403,
    send,
    localize
  }
}

const success = {
  OK: {
    invariant: 'OK',
    code: 'NXK-D36GNR',
    statusCode: 200,
    send,
    localize
  },
  NO_CONTENT: {
    invariant: 'No content',
    code: 'NXK-B89J46',
    statusCode: 204,
    send,
    localize
  },
  ACCEPTED: {
    invariant: 'Accepted',
    code: 'NXK-0OR48J',
    statusCode: 200,
    send,
    localize
  }
}

export { error, warning, success, send, localize }
