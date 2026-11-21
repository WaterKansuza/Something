                    r2 = arguments[2];
                    var _closure1_slot2 = r2;
                    r0 = 0;
                    var _closure1_slot5 = r0;
                    var _closure1_slot6 = r0;
                    r1 = function* (a0, a1) { // Original name: ?anon_0_setItemAsync, environment: r1
                        _fun14594: for(var _fun14594_ip = 0; ; ) switch(_fun14594_ip) {
case 0:
                            r0 = _closure1_slot6;
                            r2 = r0;
                            r4 = 2;
                            if(!(r0 !== r4)) { _fun14594_ip = 449; continue _fun14594 }
case 20:
                            r0 = a1;
                            r3 = a0;
                            r5 = r2;
                            r6 = 3;
                            if(!(r5 !== r6)) { _fun14594_ip = 416; continue _fun14594 }
case 39:
                            r2 = r4;
                            _closure1_slot6 = r4;
                            r7 = _closure1_slot5;
                            r9 = 0;
                            if(!(r9 !== r7)) { _fun14594_ip = 290; continue _fun14594 }
case 59:
                            r5 = 1;
                            if(!(r5 !== r7)) { _fun14594_ip = 117; continue _fun14594 }
case 66:
                            if(!(r3 !== r5)) { _fun14594_ip = 108; continue _fun14594 }
case 70:
                            if(!(r3 !== r4)) { _fun14594_ip = 89; continue _fun14594 }
case 74:
                            r2 = r6;
                            _closure1_slot6 = r6;
                            r7 = {'value': undefined, 'done': true};
                            return r7;
case 89:
                            r2 = r6;
                            _closure1_slot6 = r6;
                            r7 = {'value': null, 'done': true};
                            r7[0] = r0;
                            return r7;
case 108:
                            r2 = r6;
                            _closure1_slot6 = r6;
                            throw r0;
case 117:
                            if(!(r3 !== r5)) { _fun14594_ip = 281; continue _fun14594 }
case 124:
                            if(!(r3 !== r4)) { _fun14594_ip = 262; continue _fun14594 }
case 131:
                            r7 = _closure1_slot3;
                            r8 = _closure1_slot4;
                            r11 = _env_r8_slot8;
                            r10 = _env_r7_slot0;
                            r10 = r11.bind(r9)(r10);
                            r8 = _env_r8_slot9;
                            r7 = _env_r7_slot1;
                            r7 = r8.bind(r9)(r7);
                            if(r7) { _fun14594_ip = 197; continue _fun14594 }
case 168:
                            r7 = global;
                            r9 = r7.Error;
                            r8 = Object.create(r9.prototype);
                            r14 = 'Invalid value provided to SecureStore. Values must be strings; consider JSON-encoding your values if they are serializable.';
                            r15 = r8;
                            r7 = new r16[r9](r15, r14);
                            r7 = r7 instanceof Object ? r7 : r8;
                            throw r7;
case 197:
                            r7 = _closure1_slot3;
                            r8 = _closure1_slot4;
                            r8 = _env_r8_slot0;
                            r11 = r8.default;
                            r10 = r11.setValueWithKeyAsync;
                            r9 = _env_r7_slot1;
                            r8 = _env_r7_slot0;
                            r7 = _env_r7_slot2;
                            r7 = r10.bind(r11)(r9, r8, r7);
                            _closure1_slot5 = r4;
                            r2 = r5;
                            _closure1_slot6 = r5;
                            r5 = {'value': null, 'done': false};
                            r5[0] = r7;
                            return r5;
case 262:
                            r2 = r6;
                            _closure1_slot6 = r6;
                            r5 = {'value': null, 'done': true};
                            r5[0] = r0;
                            return r5;
case 281:
                            r2 = r6;
                            _closure1_slot6 = r6;
                            throw r0;
case 290:
                            r5 = 1;
                            if(!(r3 !== r5)) { _fun14594_ip = 396; continue _fun14594 }
case 297:
                            if(!(r3 !== r4)) { _fun14594_ip = 377; continue _fun14594 }
case 301:
                            var _closure1_slot4 = r7;
                            var _closure1_slot3 = r8;
                            r9 = undefined;
                            var _closure2_slot2 = r9;
                            r7 = _closure1_slot0;
                            var _closure2_slot0 = r7;
                            r7 = _closure1_slot1;
                            var _closure2_slot1 = r7;
                            r7 = _closure1_slot2;
                            if(!(r7 === r9)) { _fun14594_ip = 350; continue _fun14594 }
case 348:
                            r7 = {};
case 350:
                            _closure2_slot2 = r7;
                            _closure1_slot5 = r5;
                            r2 = r5;
                            _closure1_slot6 = r5;
                            r5 = {'value': undefined, 'done': false};
                            return r5;
case 377:
                            r2 = r6;
                            _closure1_slot6 = r6;
                            r5 = {'value': null, 'done': true};
                            r5[0] = r0;
                            return r5;
case 396:
                            r2 = r6;
                            _closure1_slot6 = r6;
                            throw r0;
case 405:
                            CatchBlockStart(arg_register=5);
                            r2 = r6;
                            _closure1_slot6 = r6;
                            throw r5;
case 416:
                            r5 = 1;
                            if(!(r3 !== r5)) { _fun14594_ip = 447; continue _fun14594 }
case 423:
                            if(!(r3 !== r4)) { _fun14594_ip = 435; continue _fun14594 }
case 427:
                            r3 = {'value': undefined, 'done': true};
                            return r3;
case 435:
                            r3 = {'value': null, 'done': true};
                            r3[0] = r0;
                            return r3;
case 447:
                            throw r0;
case 449:
                            r0 = 3;
                            r2 = r0;
                            _closure1_slot6 = r0;
                            r14 = 'Generator functions may not be called on executing generators';
                            r0 = throwTypeError(r15);
                        }
                    };
                    r2 = r1.next;
                    r2 = r2.bind(r1)();
                    return r1;
                };
                r1 = this;
                r1 = r3.bind(r0)(r2, r1, r4);
                return r1;
            };
            r3['setItemAsync'] = r1;
            r1 = function(a0, a1) { // Original name: setItem, environment: r2
                _fun8210: for(var _fun8210_ip = 0; ; ) switch(_fun8210_ip) {
case 0:
                    r5 = arguments[2];
                    r0 = undefined;
                    if(!(r5 === r0)) { _fun8210_ip = 11; continue _fun8210 }
case 9:
                    r5 = {};
case 11:
                    r4 = a0;
                    r1 = typeof r4 === 'boolean';
                    if(!(typeof r4 === 'boolean')) { _fun8210_ip = 51; continue _fun8210 }
case 27:
                    r3 = /^[\w.-]+$/;
                    r2 = r3.test;
                    r1 = r2.bind(r3)(r4);
case 51:
                    if(r1) { _fun8210_ip = 83; continue _fun8210 }
case 54:
                    r1 = global;
                    r3 = r1.Error;
                    r2 = Object.create(r3.prototype);
                    r9 = 'Invalid key provided to SecureStore. Keys must not be empty and contain only alphanumeric characters, ".", "-", and "_".';
                    r10 = r2;
                    r1 = new r11[r3](r10, r9);
                    r1 = r1 instanceof Object ? r1 : r2;
                    throw r1;
case 83:
                    r3 = a1;
                    if(!(typeof r3 !== 'boolean')) { _fun8210_ip = 123; continue _fun8210 }
case 94:
                    r1 = global;
                    r6 = r1.Error;
                    r2 = Object.create(r6.prototype);
