// Copyright 2011 Mark Cavage, Inc.  All rights reserved.


module.exports = {

  // Misc
  LDAP_VERSION_3: 0x03,
  LBER_SET: 0x31,
  LDAP_CONTROLS: 0xa0,

  // Search
  SCOPE_BASE_OBJECT: 0,
  SCOPE_ONE_LEVEL: 1,
  SCOPE_SUBTREE: 2,

  NEVER_DEREF_ALIASES: 0,
  DEREF_IN_SEARCHING: 1,
  DEREF_BASE_OBJECT: 2,
  DEREF_ALWAYS: 3,

  FILTER_AND: 0xa0,
  FILTER_OR: 0xa1,
  FILTER_NOT: 0xa2,
  FILTER_EQUALITY: 0xa3,
  FILTER_SUBSTRINGS: 0xa4,
  FILTER_GE: 0xa5,
  FILTER_LE: 0xa6,
  FILTER_PRESENT: 0x87,
  FILTER_APPROX: 0xa8,
  FILTER_EXT: 0xa9,

  // Protocol Operations
  LDAP_REQ_BIND: 0x60,
  LDAP_REQ_UNBIND: 0x42,
  LDAP_REQ_SEARCH: 0x63,
  LDAP_REQ_MODIFY: 0x66,
  LDAP_REQ_ADD: 0x68,
  LDAP_REQ_DELETE: 0x4a,
  LDAP_REQ_MODRDN: 0x6c,
  LDAP_REQ_COMPARE: 0x6e,
  LDAP_REQ_ABANDON: 0x50,
  LDAP_REQ_EXTENSION: 0x77,

  LDAP_REP_BIND: 0x61,
  LDAP_REP_SEARCH_ENTRY: 0x64,
  LDAP_REP_SEARCH_REF: 0x73,
  LDAP_REP_SEARCH: 0x65,
  LDAP_REP_MODIFY: 0x67,
  LDAP_REP_ADD: 0x69,
  LDAP_REP_DELETE: 0x6b,
  LDAP_REP_MODRDN: 0x6d,
  LDAP_REP_COMPARE: 0x6f,
  LDAP_REP_EXTENSION: 0x78
};