                            if(!(r3 !== r5)) { _fun14590_ip = 304; continue _fun14590 }
case 280:
                            if(!(r3 !== r4)) { _fun14590_ip = 292; continue _fun14590 }
case 284:
                            r3 = {'value': undefined, 'done': true};
                            return r3;
case 292:
                            r3 = {'value': null, 'done': true};
                            r3[0] = r0;
                            return r3;
case 304:
                            throw r0;
case 306:
                            r0 = 3;
                            r2 = r0;
                            _closure1_slot0 = r0;
                            r14 = 'Generator functions may not be called on executing generators';
                            r0 = throwTypeError(r15);
                        }
                    };
                    return r1;
                };
                r1 = this;
                r1 = r3.bind(r0)(r2, r1, r4);
                return r1;
            };
            r3['clearTokens'] = r1;
            r1 = a6;
            r3 = r1[r0];
            r0 = undefined;
            r1 = a1;
            r4 = r1.bind(r0)(r3);
            var _closure0_slot0 = r4;
            var _closure0_slot1 = r0;
            if(!r4) { _fun1295_ip = 111; continue _fun1295 }
case 100:
            r3 = r4.__esModule;
            r1 = r4;
            if(r3) { _fun1295_ip = 160; continue _fun1295 }
case 111:
            r3 = {};
            _closure0_slot1 = r3;
            if(!r4) { _fun1295_ip = 151; continue _fun1295 }
case 120:
            r7 = r6.Object;
            r6 = r7.keys;
            r7 = r6.bind(r7)(r4);
            r6 = r7.forEach;
            r5 = function(a0) { // Environment: r5
                _fun12552: for(var _fun12552_ip = 0; ; ) switch(_fun12552_ip) {
case 0:
                    r5 = a0;
                    var _closure1_slot0 = r5;
                    r3 = global;
                    r6 = r3.Object;
                    r4 = r6.getOwnPropertyDescriptor;
                    r1 = _closure0_slot0;
                    r1 = r4.bind(r6)(r1, r5);
                    r4 = r3.Object;
                    r3 = r4.defineProperty;
                    r2 = _closure0_slot1;
                    r6 = r1.get;
                    if(r6) { _fun12552_ip = 77; continue _fun12552 }
case 59:
                    r6 = {'enumerable': true, 'get': null};
                    r7 = function() { // Original name: get, environment: r7
                        r1 = _closure0_slot0;
                        r0 = _closure1_slot0;
                        r0 = r1[r0];
                        return r0;
                    };
                    r6[1] = r7;
                    r1 = r6;
case 77:
                    r1 = r3.bind(r4)(r2, r5, r1);
                    r0 = undefined;
                    return r0;
                }
            };
            r5 = r6.bind(r7)(r5);
case 151:
            r3['default'] = r4;
            r1 = r3;
case 160:
            var _closure0_slot0 = r1;
            r1 = 'utt.accessToken';
            var _closure0_slot1 = r1;
            r1 = 'utt.refreshToken';
            var _closure0_slot2 = r1;
            r1 = 'utt.studentCode';
            var _closure0_slot3 = r1;
            return r0;
        }
    };
    r9 = r11.bind(r5)(r9, r0, r10);
    r11 = r8.__d;
    r0 = 1294;
    r10 = [1295];
    r9 = function(a0, a1, a2, a3, a4, a5, a6) {
        _fun1296: for(var _fun1296_ip = 0; ; ) switch(_fun1296_ip) {
case 0:
            r3 = a5;
            r0 = undefined;
            r1 = function(a0) { // Original name: ensureValidKey
                _fun8213: for(var _fun8213_ip = 0; ; ) switch(_fun8213_ip) {
case 0:
                    r4 = a0;
                    r1 = typeof r4 === 'boolean';
                    if(!(typeof r4 === 'boolean')) { _fun8213_ip = 40; continue _fun8213 }
case 16:
                    r3 = /^[\w.-]+$/;
                    r2 = r3.test;
                    r1 = r2.bind(r3)(r4);
case 40:
                    if(r1) { _fun8213_ip = 72; continue _fun8213 }
case 43:
                    r1 = global;
                    r3 = r1.Error;
                    r2 = Object.create(r3.prototype);
                    r5 = 'Invalid key provided to SecureStore. Keys must not be empty and contain only alphanumeric characters, ".", "-", and "_".';
