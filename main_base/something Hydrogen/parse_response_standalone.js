    r9 = function(a0, a1, a2, a3, a4, a5, a6) {
        _fun1353: for(var _fun1353_ip = 0; ; ) switch(_fun1353_ip) {
case 0:
            r3 = a1;
            r5 = a5;
            r1 = a6;
            r4 = function(a0) { // Original name: parseResponse, environment: r2
                r0 = undefined;
                r2 = undefined;
                r2 = arguments;
                r4 = r2;
                r3 = spawnAsync;
                r2 = function(a0) { // Original name: ?anon_0_parseResponse, environment: r2
                    r2 = a0;
                    var _closure1_slot0 = r2;
                    r0 = 0;
                    var _closure1_slot7 = r0;
                    var _closure1_slot8 = r0;
                    var _closure1_slot6 = r0;
                    r1 = function* (a0) { // Original name: ?anon_0_parseResponse, environment: r1
                        _fun14666: for(var _fun14666_ip = 0; ; ) switch(_fun14666_ip) {
case 0:
                            r0 = _closure1_slot8;
                            r2 = r0;
                            r4 = 2;
                            if(!(r0 !== r4)) { _fun14666_ip = 587; continue _fun14666 }
case 20:
                            r0 = arguments[1];
                            r3 = a0;
                            r6 = r2;
                            r7 = 3;
                            r5 = 1;
                            r15 = 0;
                            r13 = global;
                            r12 = 4;
                            r11 = '.';
                            r10 = 'Expected a JSON response from server when fetching Expo token, received response: ';
                            r9 = 'ERR_NOTIFICATIONS_SERVER_ERROR';
                            r8 = 'Expected a JSON response from server when fetching Expo token, received body: ';
                            if(!(r6 !== r7)) { _fun14666_ip = 557; continue _fun14666 }
case 68:
                            r2 = r4;
                            _closure1_slot8 = r4;
                            r6 = _closure1_slot7;
                            if(!(r15 !== r6)) { _fun14666_ip = 421; continue _fun14666 }
case 86:
                            if(!(r5 !== r6)) { _fun14666_ip = 340; continue _fun14666 }
case 93:
                            if(!(r4 !== r6)) { _fun14666_ip = 261; continue _fun14666 }
case 100:
                            if(!(r7 !== r6)) { _fun14666_ip = 198; continue _fun14666 }
case 104:
                            if(!(r3 !== r5)) { _fun14666_ip = 189; continue _fun14666 }
case 108:
                            if(!(r3 !== r4)) { _fun14666_ip = 166; continue _fun14666 }
case 112:
                            r16 = _closure1_slot1;
                            r6 = _closure1_slot2;
                            r17 = _closure1_slot3;
                            r16 = r16.bind(r6)(r0);
                            r6 = r13.HermesInternal;
                            r6 = r6.concat;
                            r19 = r6.bind(r8)(r16, r11);
                            r16 = Object.create(r17.prototype);
                            r21 = r16;
                            r20 = r9;
                            r6 = new r22[r17](r21, r20, r19);
                            r6 = r6 instanceof Object ? r6 : r16;
                            throw r6;
case 166:
                            _closure1_slot6 = r15;
                            r2 = r7;
                            _closure1_slot8 = r7;
                            r6 = {'value': null, 'done': true};
                            r6[0] = r0;
                            return r6;
case 189:
                            r2 = r7;
                            _closure1_slot8 = r7;
                            throw r0;
case 198:
                            if(!(r3 !== r5)) { _fun14666_ip = 252; continue _fun14666 }
case 202:
                            if(!(r3 !== r4)) { _fun14666_ip = 229; continue _fun14666 }
case 206:
                            _closure1_slot6 = r15;
                            r2 = r7;
                            _closure1_slot8 = r7;
                            r6 = {'value': null, 'done': true};
                            r6[0] = r0;
                            return r6;
case 229:
                            _closure1_slot6 = r15;
                            r2 = r7;
                            _closure1_slot8 = r7;
                            r6 = {'value': null, 'done': true};
                            r6[0] = r0;
                            return r6;
case 252:
                            r2 = r7;
                            _closure1_slot8 = r7;
                            throw r0;
case 261:
                            r6 = _closure1_slot5;
                            r16 = _closure1_slot4;
                            _closure1_slot6 = r15;
                            r16 = _env_r16_slot2;
                            r17 = r16.CodedError;
                            r18 = r13.JSON;
                            r16 = r18.stringify;
                            r6 = _env_r6_slot0;
                            r16 = r16.bind(r18)(r6);
                            r6 = r13.HermesInternal;
                            r6 = r6.concat;
                            r19 = r6.bind(r10)(r16, r11);
                            r16 = Object.create(r17.prototype);
                            r21 = r16;
                            r20 = r9;
                            r6 = new r22[r17](r21, r20, r19);
                            r6 = r6 instanceof Object ? r6 : r16;
                            throw r6;
case 340:
                            r6 = _closure1_slot5;
                            r16 = _closure1_slot4;
                            _closure1_slot6 = r4;
                            r16 = _env_r16_slot2;
                            r16 = r16.CodedError;
                            var _closure1_slot3 = r16;
                            r16 = r13.JSON;
                            var _closure1_slot2 = r16;
                            r16 = r16.stringify;
                            var _closure1_slot1 = r16;
                            r16 = _env_r6_slot0;
                            r6 = r16.text;
                            r16 = r6.bind(r16)();
                            _closure1_slot7 = r12;
                            r2 = r5;
                            _closure1_slot8 = r5;
                            r6 = {'value': null, 'done': false};
                            r6[0] = r16;
                            return r6;
case 421:
                            if(!(r3 !== r5)) { _fun14666_ip = 507; continue _fun14666 }
case 425:
                            if(!(r3 !== r4)) { _fun14666_ip = 488; continue _fun14666 }
case 429:
                            var _closure1_slot4 = r14;
                            var _closure1_slot5 = r6;
                            r16 = _closure1_slot0;
                            var _closure2_slot0 = r16;
                            _closure1_slot6 = r5;
                            r6 = r16.json;
                            r16 = r6.bind(r16)();
                            _closure1_slot7 = r7;
                            r2 = r5;
                            _closure1_slot8 = r5;
                            r6 = {'value': null, 'done': false};
                            r6[0] = r16;
                            return r6;
case 488:
                            r2 = r7;
                            _closure1_slot8 = r7;
                            r6 = {'value': null, 'done': true};
                            r6[0] = r0;
                            return r6;
case 507:
                            r2 = r7;
                            _closure1_slot8 = r7;
                            throw r0;
case 516:
