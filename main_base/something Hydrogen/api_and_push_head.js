// === MODULE 1296: ALL API ENDPOINTS (370382 - 371300) ===
    r11 = r8.__d;
    r0 = 1296;
    r10 = [1297, 1289, 1293];
    r9 = function(a0, a1, a2, a3, a4, a5, a6) {
        r3 = a1;
        r5 = a5;
        r1 = a6;
        r4 = global;
        r8 = r4.Object;
        r7 = r8.defineProperty;
        r6 = '__esModule';
        r4 = {'value': true};
        r4 = r7.bind(r8)(r5, r6, r4);
        r4 = function(a0) { // Original name: fetchFeed, environment: r2
            _fun8223: for(var _fun8223_ip = 0; ; ) switch(_fun8223_ip) {
case 0:
                r4 = a0;
                r10 = r4.type;
                r9 = r4.category;
                r8 = r4.search;
                r7 = r4.cursor;
                r6 = r4.perPage;
                r2 = undefined;
                if(!(r6 === r2)) { _fun8223_ip = 40; continue _fun8223 }
case 37:
                r6 = 20;
case 40:
                r4 = r4.unread;
                r3 = _closure0_slot1;
                r5 = r3.apiRequest;
                r3 = {'type': null, 'category': null, 'search': null, 'cursor': null, 'per_page': null, 'unread': null};
                r3[0] = r10;
                r3[1] = r9;
                r3[2] = r8;
                r3[3] = r7;
                r3[4] = r6;
                r1 = undefined;
                if(!r4) { _fun8223_ip = 93; continue _fun8223 }
case 90:
                r1 = 1;
case 93:
                r4 = {'query': null};
                r3[5] = r1;
                r4[0] = r3;
                r3 = '/posts';
                r3 = r5.bind(r2)(r3, r4);
                return r3;
            }
        };
        r5['fetchFeed'] = r4;
        r4 = function(a0) { // Original name: fetchPost, environment: r2
            r1 = _closure0_slot1;
            r2 = r1.apiRequest;
            r1 = global;
            r4 = r1.encodeURIComponent;
            r0 = undefined;
            r3 = a0;
            r4 = r4.bind(r0)(r3);
            r1 = r1.HermesInternal;
            r3 = r1.concat;
            r1 = '/posts/';
            r1 = r3.bind(r1)(r4);
            r1 = r2.bind(r0)(r1);
            return r1;
        };
        r5['fetchPost'] = r4;
        r4 = function(a0) { // Original name: fetchCategories, environment: r2
            r1 = _closure0_slot1;
            r3 = r1.apiRequest;
            r2 = {'query': null};
            r1 = {'type': null};
            r4 = a0;
            r1[0] = r4;
            r2[0] = r1;
            r1 = '/categories';
            r0 = undefined;
            r1 = r3.bind(r0)(r1, r2);
            return r1;
        };
        r5['fetchCategories'] = r4;
        r4 = function() { // Original name: fetchAppConfig, environment: r2
            r1 = _closure0_slot1;
            r3 = r1.apiRequest;
            r2 = '/system/config';
            r0 = undefined;
            r1 = {'anonymous': true};
            r1 = r3.bind(r0)(r2, r1);
            return r1;
        };
        r5['fetchAppConfig'] = r4;
        r4 = function() { // Original name: fetchHomeBanners, environment: r2
            r1 = _closure0_slot1;
            r2 = r1.apiRequest;
            r1 = '/banners';
            r0 = undefined;
            r1 = r2.bind(r0)(r1);
            return r1;
        };
        r5['fetchHomeBanners'] = r4;
        r4 = function() { // Original name: fetchParkingLots, environment: r2
            r1 = _closure0_slot1;
            r2 = r1.apiRequest;
            r1 = '/parking-lots';
            r0 = undefined;
            r1 = r2.bind(r0)(r1);
            return r1;
        };
        r5['fetchParkingLots'] = r4;
        r4 = function() { // Original name: fetchMe, environment: r2
            r1 = _closure0_slot1;
            r2 = r1.apiRequest;
            r1 = '/auth/me';
            r0 = undefined;
            r1 = r2.bind(r0)(r1);
            return r1;
        };
        r5['fetchMe'] = r4;
        r4 = function(a0, a1) { // Original name: logoutSession, environment: r2
            r1 = _closure0_slot1;
            r3 = r1.apiRequest;
            r2 = {'method': 'POST', 'body': null, 'anonymous': true};
            r1 = {'refresh_token': null, 'push_token': null};
            r4 = a0;
            r1[0] = r4;
            r4 = a1;
            r1[1] = r4;
            r2[1] = r1;
            r1 = '/auth/logout';
            r0 = undefined;
            r1 = r3.bind(r0)(r1, r2);
            return r1;
        };
        r5['logoutSession'] = r4;
        r4 = function(a0) { // Original name: registerDevice, environment: r2
            r1 = _closure0_slot1;
            r3 = r1.apiRequest;
            r2 = {'method': 'POST', 'body': null};
            r1 = a0;
            r2[1] = r1;
            r1 = '/devices';
            r0 = undefined;
            r1 = r3.bind(r0)(r1, r2);
            return r1;
        };
        r5['registerDevice'] = r4;
        r4 = function(a0) { // Original name: unregisterDevice, environment: r2
            r1 = _closure0_slot1;
            r3 = r1.apiRequest;
            r2 = {'method': 'DELETE', 'body': null};
            r1 = {'push_token': null};
            r4 = a0;
            r1[0] = r4;
            r2[1] = r1;
            r1 = '/devices';
            r0 = undefined;
            r1 = r3.bind(r0)(r1, r2);
            return r1;
        };
        r5['unregisterDevice'] = r4;
        r4 = function() { // Original name: fetchAcademic, environment: r2
            r1 = _closure0_slot1;
            r2 = r1.apiRequest;
            r1 = '/me/academic';
            r0 = undefined;
            r1 = r2.bind(r0)(r1);
            return r1;
        };
        r5['fetchAcademic'] = r4;
        r4 = function() { // Original name: fetchCourses, environment: r2
            r1 = _closure0_slot1;
            r2 = r1.apiRequest;
            r1 = '/me/courses';
            r0 = undefined;
            r1 = r2.bind(r0)(r1);
            return r1;
        };
        r5['fetchCourses'] = r4;
        r4 = function() { // Original name: fetchFinance, environment: r2
            r1 = _closure0_slot1;
            r2 = r1.apiRequest;
            r1 = '/me/finance';
            r0 = undefined;
            r1 = r2.bind(r0)(r1);
            return r1;
        };
        r5['fetchFinance'] = r4;
        r4 = function() { // Original name: fetchAttendance, environment: r2
            r1 = _closure0_slot1;
            r2 = r1.apiRequest;
            r1 = '/me/attendance';
            r0 = undefined;
            r1 = r2.bind(r0)(r1);
            return r1;
        };
        r5['fetchAttendance'] = r4;
        r4 = function() { // Original name: fetchWarning, environment: r2
            r1 = _closure0_slot1;
            r2 = r1.apiRequest;
            r1 = '/me/warning';
            r0 = undefined;
            r1 = r2.bind(r0)(r1);
            return r1;
        };
        r5['fetchWarning'] = r4;
        r4 = function(a0) { // Original name: fetchTimetable, environment: r2
            r1 = _closure0_slot1;
            r3 = r1.apiRequest;
            r2 = {'query': null};
            r1 = {'week': null};
            r4 = a0;
            r1[0] = r4;
            r2[0] = r1;
            r1 = '/me/timetable';
            r0 = undefined;
            r1 = r3.bind(r0)(r1, r2);
            return r1;
        };
        r5['fetchTimetable'] = r4;
        r4 = function() { // Original name: fetchExamSchedule, environment: r2
            r1 = _closure0_slot1;
            r2 = r1.apiRequest;
            r1 = '/me/exams';
            r0 = undefined;
            r1 = r2.bind(r0)(r1);
            return r1;
        };
        r5['fetchExamSchedule'] = r4;
        r4 = function(a0) { // Original name: fetchStaffSearch, environment: r2
            r1 = _closure0_slot1;
            r3 = r1.apiRequest;
            r2 = {'query': null};
            r1 = {'keyword': null};
            r4 = a0;
            r1[0] = r4;
            r2[0] = r1;
            r1 = '/staff/search';
            r0 = undefined;
            r1 = r3.bind(r0)(r1, r2);
            return r1;
        };
        r5['fetchStaffSearch'] = r4;
        r4 = function(a0) { // Original name: fetchStaffDetail, environment: r2
            r1 = _closure0_slot1;
            r2 = r1.apiRequest;
            r1 = global;
            r4 = r1.encodeURIComponent;
            r0 = undefined;
            r3 = a0;
            r4 = r4.bind(r0)(r3);
            r1 = r1.HermesInternal;
            r3 = r1.concat;
            r1 = '/staff/';
            r1 = r3.bind(r1)(r4);
            r1 = r2.bind(r0)(r1);
            return r1;
        };
        r5['fetchStaffDetail'] = r4;
        r4 = function() { // Original name: fetchServices, environment: r2
            r1 = _closure0_slot1;
            r3 = r1.apiRequest;
            r2 = '/services';
            r0 = undefined;
            r1 = {'anonymous': true};
            r1 = r3.bind(r0)(r2, r1);
            return r1;
        };
        r5['fetchServices'] = r4;
        r4 = function(a0) { // Original name: fetchService, environment: r2
            r1 = _closure0_slot1;
            r3 = r1.apiRequest;
            r1 = global;
            r4 = r1.encodeURIComponent;
            r0 = undefined;
            r2 = a0;
            r4 = r4.bind(r0)(r2);
            r1 = r1.HermesInternal;
            r2 = r1.concat;
            r1 = '/services/';
            r2 = r2.bind(r1)(r4);
            r1 = {'anonymous': true};
            r1 = r3.bind(r0)(r2, r1);
            return r1;
        };
        r5['fetchService'] = r4;
        r4 = function(a0, a1) { // Original name: submitServiceRequest, environment: r2
            r1 = _closure0_slot1;
            r3 = r1.apiRequest;
            r1 = global;
            r4 = r1.encodeURIComponent;
            r0 = undefined;
            r2 = a0;
            r5 = r4.bind(r0)(r2);
            r1 = r1.HermesInternal;
            r4 = r1.concat;
            r2 = '/requests';
            r1 = '/services/';
            r2 = r4.bind(r1)(r5, r2);
            r1 = {'method': 'POST', 'body': null};
            r4 = {'form_data': null};
            r5 = a1;
            r4[0] = r5;
            r1[1] = r4;
            r1 = r3.bind(r0)(r2, r1);
            return r1;
        };
        r5['submitServiceRequest'] = r4;
        r4 = function(a0, a1) { // Original name: uploadFormFile, environment: r2
            _fun8245: for(var _fun8245_ip = 0; ; ) switch(_fun8245_ip) {
case 0:
                r6 = a1;
                r1 = _closure0_slot0;
                r4 = r1.File;
                r3 = Object.create(r4.prototype);
                r9 = a0;
                r10 = r3;
                r1 = new r11[r4](r10, r9);
                r5 = r1 instanceof Object ? r1 : r3;
                r1 = global;
                r1 = r1.FormData;
                r3 = Object.create(r1.prototype);
                r10 = r3;
                r1 = new r11[r1](r10);
                r1 = r1 instanceof Object ? r1 : r3;
                r4 = r1.append;
                r0 = null;
                if(!(r6 == r0)) { _fun8245_ip = 74; continue _fun8245 }
case 69:
                r6 = r5.name;
case 74:
                r3 = 'file';
                r3 = r4.bind(r1)(r3, r5, r6);
                r2 = _closure0_slot1;
                r3 = r2.apiRequest;
                r2 = {'method': 'POST', 'form': null};
                r2[1] = r1;
                r1 = '/uploads';
                r0 = undefined;
                r1 = r3.bind(r0)(r1, r2);
                return r1;
            }
        };
        r5['uploadFormFile'] = r4;
        r4 = function() { // Original name: fetchMyRequests, environment: r2
            r1 = _closure0_slot1;
            r2 = r1.apiRequest;
            r1 = '/me/requests';
            r0 = undefined;
            r1 = r2.bind(r0)(r1);
            return r1;
        };
        r5['fetchMyRequests'] = r4;
        r4 = function(a0) { // Original name: fetchMyRequest, environment: r2
            r1 = _closure0_slot1;
            r2 = r1.apiRequest;
            r1 = global;
            r4 = r1.encodeURIComponent;
            r0 = undefined;
            r3 = a0;
            r4 = r4.bind(r0)(r3);
            r1 = r1.HermesInternal;
            r3 = r1.concat;
            r1 = '/me/requests/';
            r1 = r3.bind(r1)(r4);
            r1 = r2.bind(r0)(r1);
            return r1;
        };
        r5['fetchMyRequest'] = r4;
        r4 = function(a0) { // Original name: cancelMyRequest, environment: r2
            r1 = _closure0_slot1;
            r3 = r1.apiRequest;
            r1 = global;
            r4 = r1.encodeURIComponent;
            r0 = undefined;
            r2 = a0;
            r5 = r4.bind(r0)(r2);
            r1 = r1.HermesInternal;
            r4 = r1.concat;
            r2 = '/cancel';
            r1 = '/me/requests/';
            r2 = r4.bind(r1)(r5, r2);
            r1 = {'method': 'POST'};
            r1 = r3.bind(r0)(r2, r1);
            return r1;
        };
        r5['cancelMyRequest'] = r4;
        r4 = function(a0) { // Original name: downloadRequestPdf, environment: r2
            r0 = undefined;
            r1 = undefined;
            r1 = arguments;
            r4 = r1;
            r3 = spawnAsync;
            r2 = function(a0) { // Original name: ?anon_0_downloadRequestPdf, environment: r1
                r2 = a0;
                var _closure1_slot0 = r2;
                r0 = 0;
                var _closure1_slot4 = r0;
                var _closure1_slot5 = r0;
                var _closure1_slot3 = r0;
                r1 = function* (a0) { // Original name: ?anon_0_downloadRequestPdf, environment: r1
                    _fun14595: for(var _fun14595_ip = 0; ; ) switch(_fun14595_ip) {
case 0:
                        r0 = _closure1_slot5;
                        r2 = r0;
                        r4 = 2;
                        if(!(r0 !== r4)) { _fun14595_ip = 616; continue _fun14595 }
case 20:
                        r0 = arguments[1];
                        r3 = a0;
                        r6 = r2;
                        r7 = 3;
                        r17 = 0;
                        r15 = undefined;
                        r5 = 1;
                        r14 = global;
                        r13 = 'Bearer ';
                        r12 = '/pdf';
                        r11 = '/me/requests/';
                        r10 = '';
                        r9 = 'KhÃ´ng táº£i Ä‘Æ°á»£c tá»‡p PDF. Vui lÃ²ng thá»­ láº¡i sau.';
                        r8 = 'DOWNLOAD_FAILED';
                        if(!(r6 !== r7)) { _fun14595_ip = 586; continue _fun14595 }
case 75:
                        r2 = r4;
                        _closure1_slot5 = r4;
                        r6 = _closure1_slot4;
                        if(!(r17 !== r6)) { _fun14595_ip = 459; continue _fun14595 }
case 93:
                        if(!(r5 !== r6)) { _fun14595_ip = 207; continue _fun14595 }
case 97:
                        if(!(r4 !== r6)) { _fun14595_ip = 164; continue _fun14595 }
case 101:
                        if(!(r3 !== r5)) { _fun14595_ip = 155; continue _fun14595 }
case 105:
                        if(!(r3 !== r4)) { _fun14595_ip = 132; continue _fun14595 }
case 109:
                        _closure1_slot3 = r17;
                        r2 = r7;
                        _closure1_slot5 = r7;
                        r6 = {'value': null, 'done': true};
                        r6[0] = r0;
                        return r6;
case 132:
                        _closure1_slot3 = r17;
                        r2 = r7;
                        _closure1_slot5 = r7;
                        r6 = {'value': null, 'done': true};
                        r6[0] = r0;
                        return r6;
case 155:
                        r2 = r7;
                        _closure1_slot5 = r7;
                        throw r0;
case 164:
                        r6 = _closure1_slot2;
                        _closure1_slot3 = r17;
                        r6 = _env_r6_slot1;
                        r6 = r6.ApiError;
                        r18 = Object.create(r6.prototype);
                        r29 = r18;
                        r28 = r8;
                        r27 = r9;
                        r26 = 0;
                        r6 = new r30[r6](r29, r28, r27, r26);
                        r6 = r6 instanceof Object ? r6 : r18;
                        throw r6;
case 207:
                        if(!(r3 !== r5)) { _fun14595_ip = 450; continue _fun14595 }
case 214:
                        if(!(r3 !== r4)) { _fun14595_ip = 431; continue _fun14595 }
case 221:
                        r6 = _closure1_slot1;
                        _env_r6_slot1 = r0;
                        r19 = _closure1_slot2;
                        _closure1_slot3 = r5;
                        r18 = _env_r19_slot0;
                        r21 = r18.File;
                        r20 = r21.downloadFileAsync;
                        r19 = _env_r19_slot1;
                        r23 = r19.BASE_URL;
                        r22 = r14.encodeURIComponent;
                        r19 = _env_r6_slot0;
                        r26 = r22.bind(r15)(r19);
                        r19 = r14.HermesInternal;
                        r19 = r19.concat;
                        r29 = r10;
                        r28 = r23;
                        r27 = r11;
                        r25 = r12;
                        r19 = r30[r19](r29, r28, r27, r26, r25);
                        r18 = r18.Paths;
                        r18 = r18.cache;
                        r6 = _env_r6_slot1;
                        if(r6) { _fun14595_ip = 328; continue _fun14595 }
case 324:
                        r23 = {};
                        _fun14595_ip = 371; continue _fun14595;
case 328:
                        r22 = _closure1_slot1;
                        r6 = {'Authorization': null};
                        r22 = _env_r22_slot1;
                        r24 = r22.accessToken;
                        r22 = r14.HermesInternal;
                        r22 = r22.concat;
                        r22 = r22.bind(r13)(r24);
                        r6[0] = r22;
                        r23 = r6;
case 371:
                        r6 = {'headers': null};
                        r22 = {'Accept': 'application/pdf'};
                        r28 = r22;
                        r27 = r23;
                        r23 = copyDataProperties(r29, r28);
                        r6[0] = r22;
                        r18 = r20.bind(r21)(r19, r18, r6);
                        _closure1_slot4 = r7;
                        r2 = r5;
                        _closure1_slot5 = r5;
                        r6 = {'value': null, 'done': false};
                        r6[0] = r18;
                        return r6;
case 431:
                        r2 = r7;
                        _closure1_slot5 = r7;
                        r6 = {'value': null, 'done': true};
                        r6[0] = r0;
                        return r6;
case 450:
                        r2 = r7;
                        _closure1_slot5 = r7;
                        throw r0;
case 459:
                        if(!(r3 !== r5)) { _fun14595_ip = 549; continue _fun14595 }
case 463:
                        if(!(r3 !== r4)) { _fun14595_ip = 530; continue _fun14595 }
case 467:
                        var _closure1_slot2 = r16;
                        var _closure1_slot1 = r6;
                        r18 = _closure1_slot0;
                        var _closure2_slot0 = r18;
                        var _closure2_slot1 = r15;
                        r6 = _closure0_slot2;
                        r6 = r6.loadTokens;
                        r18 = r6.bind(r15)();
                        _closure1_slot4 = r5;
                        r2 = r5;
                        _closure1_slot5 = r5;
                        r6 = {'value': null, 'done': false};
                        r6[0] = r18;
                        return r6;
case 530:
                        r2 = r7;
                        _closure1_slot5 = r7;
                        r6 = {'value': null, 'done': true};
                        r6[0] = r0;
                        return r6;
case 549:
                        r2 = r7;
                        _closure1_slot5 = r7;
                        throw r0;
case 558:
                        CatchBlockStart(arg_register=6);
                        r18 = _closure1_slot3;
                        if(!(r17 !== r18)) { _fun14595_ip = 577; continue _fun14595 }
case 568:
                        _closure1_slot4 = r4;
                        _fun14595_ip = 75; continue _fun14595;
case 577:
                        r2 = r7;
                        _closure1_slot5 = r7;
                        throw r6;
case 586:
                        if(!(r3 !== r5)) { _fun14595_ip = 614; continue _fun14595 }
case 590:
                        if(!(r3 !== r4)) { _fun14595_ip = 602; continue _fun14595 }
case 594:
                        r3 = {'value': undefined, 'done': true};
                        return r3;
case 602:
                        r3 = {'value': null, 'done': true};
                        r3[0] = r0;
                        return r3;
case 614:
                        throw r0;
case 616:
                        r0 = 3;
                        r2 = r0;
                        _closure1_slot5 = r0;
                        r28 = 'Generator functions may not be called on executing generators';
                        r0 = throwTypeError(r29);
                    }
                };
                return r1;
            };
            r1 = this;
            r1 = r3.bind(r0)(r2, r1, r4);
            return r1;
        };
        r5['downloadRequestPdf'] = r4;
        r4 = function() { // Original name: fetchSurveys, environment: r2
            r1 = _closure0_slot1;
            r2 = r1.apiRequest;
            r1 = '/surveys';
            r0 = undefined;
            r1 = r2.bind(r0)(r1);
            return r1;
        };
        r5['fetchSurveys'] = r4;
        r4 = function(a0) { // Original name: fetchSurvey, environment: r2
            r1 = _closure0_slot1;
            r2 = r1.apiRequest;
            r1 = global;
            r1 = r1.HermesInternal;
            r4 = r1.concat;
            r3 = '/surveys/';
            r1 = a0;
            r1 = r4.bind(r3)(r1);
            r0 = undefined;
            r1 = r2.bind(r0)(r1);
            return r1;
        };
        r5['fetchSurvey'] = r4;
        r4 = function(a0, a1) { // Original name: submitSurvey, environment: r2
            r1 = _closure0_slot1;
            r3 = r1.apiRequest;
            r1 = global;
            r1 = r1.HermesInternal;
            r5 = r1.concat;
            r4 = '/responses';
            r2 = '/surveys/';
            r1 = a0;
            r2 = r5.bind(r2)(r1, r4);
            r1 = {'method': 'POST', 'body': null};
            r4 = {'answers': null};
            r5 = a1;
            r4[0] = r5;
            r1[1] = r4;
            r0 = undefined;
            r1 = r3.bind(r0)(r2, r1);
            return r1;
        };
        r5['submitSurvey'] = r4;
        r4 = function(a0) { // Original name: fetchEvents, environment: r2
            r1 = _closure0_slot1;
            r3 = r1.apiRequest;
            r2 = {'query': null};
            r1 = {'filter': null};
            r4 = a0;
            r1[0] = r4;
            r2[0] = r1;
            r1 = '/events';
            r0 = undefined;
            r1 = r3.bind(r0)(r1, r2);
            return r1;
        };
        r5['fetchEvents'] = r4;
        r4 = function(a0) { // Original name: fetchEvent, environment: r2
            r1 = _closure0_slot1;
            r2 = r1.apiRequest;
            r1 = global;
            r4 = r1.encodeURIComponent;
            r0 = undefined;
            r3 = a0;
            r4 = r4.bind(r0)(r3);
            r1 = r1.HermesInternal;
            r3 = r1.concat;
            r1 = '/events/';
            r1 = r3.bind(r1)(r4);
            r1 = r2.bind(r0)(r1);
            return r1;
        };
        r5['fetchEvent'] = r4;
        r4 = function(a0) { // Original name: registerForEvent, environment: r2
            r1 = _closure0_slot1;
            r3 = r1.apiRequest;
            r1 = global;
            r4 = r1.encodeURIComponent;
            r0 = undefined;
            r2 = a0;
            r5 = r4.bind(r0)(r2);
            r1 = r1.HermesInternal;
            r4 = r1.concat;
            r2 = '/register';
            r1 = '/events/';
            r2 = r4.bind(r1)(r5, r2);
            r1 = {'method': 'POST'};
            r1 = r3.bind(r0)(r2, r1);
            return r1;
        };
        r5['registerForEvent'] = r4;
        r4 = function(a0) { // Original name: checkInToEvent, environment: r2
            r1 = _closure0_slot1;
            r3 = r1.apiRequest;
            r2 = {'method': 'POST', 'body': null};
            r1 = {'token': null};
            r4 = a0;
            r1[0] = r4;
            r2[1] = r1;
            r1 = '/events/checkin';
            r0 = undefined;
            r1 = r3.bind(r0)(r1, r2);
            return r1;
        };
        r5['checkInToEvent'] = r4;
        r4 = function(a0) { // Original name: cancelEventRegistration, environment: r2
            r1 = _closure0_slot1;
            r3 = r1.apiRequest;
            r1 = global;
            r4 = r1.encodeURIComponent;
            r0 = undefined;
            r2 = a0;
            r5 = r4.bind(r0)(r2);
            r1 = r1.HermesInternal;
            r4 = r1.concat;
            r2 = '/cancel';
            r1 = '/events/';
            r2 = r4.bind(r1)(r5, r2);
            r1 = {'method': 'POST'};
            r1 = r3.bind(r0)(r2, r1);
            return r1;
        };
        r5['cancelEventRegistration'] = r4;
        r4 = function(a0, a1) { // Original name: submitEventEvidence, environment: r2
            r1 = _closure0_slot0;
            r4 = r1.File;
            r3 = Object.create(r4.prototype);
            r10 = a1;
            r11 = r3;
            r1 = new r12[r4](r11, r10);
            r7 = r1 instanceof Object ? r1 : r3;
            r1 = global;
            r3 = r1.FormData;
            r4 = Object.create(r3.prototype);
            r11 = r4;
            r3 = new r12[r3](r11);
            r4 = r3 instanceof Object ? r3 : r4;
            r6 = r4.append;
            r5 = r7.name;
            r3 = 'photo';
            r3 = r6.bind(r4)(r3, r7, r5);
            r2 = _closure0_slot1;
            r3 = r2.apiRequest;
            r5 = r1.encodeURIComponent;
            r0 = undefined;
            r2 = a0;
            r6 = r5.bind(r0)(r2);
            r1 = r1.HermesInternal;
            r5 = r1.concat;
            r2 = '/evidence';
            r1 = '/events/';
            r2 = r5.bind(r1)(r6, r2);
            r1 = {'method': 'POST', 'form': null};
            r1[1] = r4;
            r1 = r3.bind(r0)(r2, r1);
            return r1;
        };
        r5['submitEventEvidence'] = r4;
        r4 = function(a0) { // Original name: markPostRead, environment: r2
            r1 = _closure0_slot1;
            r3 = r1.apiRequest;
            r1 = global;
            r4 = r1.encodeURIComponent;
            r0 = undefined;
            r2 = a0;
            r5 = r4.bind(r0)(r2);
            r1 = r1.HermesInternal;
            r4 = r1.concat;
            r2 = '/read';
            r1 = '/posts/';
            r2 = r4.bind(r1)(r5, r2);
            r1 = {'method': 'POST'};
            r1 = r3.bind(r0)(r2, r1);
            return r1;
        };
        r5['markPostRead'] = r4;
        r4 = function() { // Original name: fetchFeedbackForm, environment: r2
            r1 = _closure0_slot1;
            r2 = r1.apiRequest;
            r1 = '/feedback';
            r0 = undefined;
            r1 = r2.bind(r0)(r1);
            return r1;
        };
        r5['fetchFeedbackForm'] = r4;
        r4 = function(a0) { // Original name: submitFeedback, environment: r2
            r1 = _closure0_slot1;
            r3 = r1.apiRequest;
            r2 = {'method': 'POST', 'body': null};
            r1 = {'answers': null};
            r4 = a0;
            r1[0] = r4;
            r2[1] = r1;
            r1 = '/feedback/submissions';
            r0 = undefined;
            r1 = r3.bind(r0)(r1, r2);
            return r1;
        };
        r5['submitFeedback'] = r4;
        r4 = function() { // Original name: fetchUnreadCount, environment: r2
            r1 = _closure0_slot1;
            r2 = r1.apiRequest;
            r1 = '/me/unread';
            r0 = undefined;
            r1 = r2.bind(r0)(r1);
            return r1;
        };
        r5['fetchUnreadCount'] = r4;
        r4 = function() { // Original name: fetchInbox, environment: r2
            _fun8263: for(var _fun8263_ip = 0; ; ) switch(_fun8263_ip) {
case 0:
                r3 = arguments[0];
                r2 = undefined;
                if(!(r3 === r2)) { _fun8263_ip = 11; continue _fun8263 }
case 9:
                r3 = {};
case 11:
                r7 = r3.cursor;
                r4 = r3.unread;
                r6 = r3.perPage;
                if(!(r6 === r2)) { _fun8263_ip = 36; continue _fun8263 }
case 33:
                r6 = 20;
case 36:
                r3 = _closure0_slot1;
                r5 = r3.apiRequest;
                r3 = {'cursor': null, 'per_page': null, 'unread': null};
                r3[0] = r7;
                r3[1] = r6;
                r1 = undefined;
                if(!r4) { _fun8263_ip = 71; continue _fun8263 }
case 68:
                r1 = 1;
case 71:
                r4 = {'query': null};
                r3[2] = r1;
                r4[0] = r3;
                r3 = '/me/inbox';
                r3 = r5.bind(r2)(r3, r4);
                return r3;
            }
        };
        r5['fetchInbox'] = r4;
        r4 = function(a0) { // Original name: markInboxRead, environment: r2
            r1 = _closure0_slot1;
            r3 = r1.apiRequest;
            r1 = global;
            r1 = r1.HermesInternal;
            r5 = r1.concat;
            r4 = '/read';
            r2 = '/me/inbox/';
            r1 = a0;
            r2 = r5.bind(r2)(r1, r4);
            r0 = undefined;
            r1 = {'method': 'POST'};
            r1 = r3.bind(r0)(r2, r1);
            return r1;
        };
        r5['markInboxRead'] = r4;
        r4 = function() { // Original name: markAllInboxRead, environment: r2
            r1 = _closure0_slot1;
            r3 = r1.apiRequest;
            r2 = '/me/inbox/read-all';
            r0 = undefined;
            r1 = {'method': 'POST'};
            r1 = r3.bind(r0)(r2, r1);
            return r1;
        };
        r5['markAllInboxRead'] = r4;
        r4 = function(a0) { // Original name: uploadAvatar, environment: r2
            r1 = _closure0_slot0;
            r4 = r1.File;
            r3 = Object.create(r4.prototype);
            r9 = a0;
            r10 = r3;
            r1 = new r11[r4](r10, r9);
            r6 = r1 instanceof Object ? r1 : r3;
            r1 = global;
            r1 = r1.FormData;
            r3 = Object.create(r1.prototype);
            r10 = r3;
            r1 = new r11[r1](r10);
            r1 = r1 instanceof Object ? r1 : r3;
            r5 = r1.append;
            r4 = r6.name;
            r3 = 'avatar';
            r3 = r5.bind(r1)(r3, r6, r4);
            r2 = _closure0_slot1;
            r3 = r2.apiRequest;
            r2 = {'method': 'POST', 'form': null};
            r2[1] = r1;
            r1 = '/me/avatar';
            r0 = undefined;
            r1 = r3.bind(r0)(r1, r2);
            return r1;
        };
        r5['uploadAvatar'] = r4;
        r4 = function() { // Original name: deleteAvatar, environment: r2
            r1 = _closure0_slot1;
            r3 = r1.apiRequest;
            r2 = '/me/avatar';
            r0 = undefined;
            r1 = {'method': 'DELETE'};
            r1 = r3.bind(r0)(r2, r1);
            return r1;
        };
        r5['deleteAvatar'] = r4;
        r4 = r1[r0];
        r0 = undefined;
        r4 = r3.bind(r0)(r4);
        var _closure0_slot0 = r4;
        r4 = r1[r1];
        r4 = r3.bind(r0)(r4);
        var _closure0_slot1 = r4;
        r1 = r1[r2];
        r1 = r3.bind(r0)(r1);
        var _closure0_slot2 = r1;
        return r0;
    };
    r9 = r11.bind(r5)(r9, r0, r10);
    r11 = r8.__d;
    r0 = 1297;
// === MODULE 1341 HEAD: PUSH PROVIDER EFFECTS (390582 - 390860) ===
    r11 = r8.__d;
    r0 = 1341;
    r10 = [587, 564, 1290, 1342, 1316, 50, 282, 666, 1289, 1296, 1327, 1285, 1320, 1315, 1318, 1325, 1319, 228, 1346, 1407];
    r9 = function(a0, a1, a2, a3, a4, a5, a6) {
        _fun1343: for(var _fun1343_ip = 0; ; ) switch(_fun1343_ip) {
case 0:
            r5 = a1;
            var _closure0_slot0 = r5;
            r10 = a5;
            r4 = a6;
            var _closure0_slot1 = r4;
            r2 = function() { // Original name: SettingsScreen, environment: r3
                _fun8491: for(var _fun8491_ip = 0; ; ) switch(_fun8491_ip) {
case 0:
                    r6 = _closure0_slot13;
                    r6 = r6.useSession;
                    r2 = undefined;
                    r6 = r6.bind(r2)();
                    r40 = r6.me;
                    var _closure1_slot0 = r40;
                    r21 = r6.studentCode;
                    var _closure1_slot1 = r21;
                    r7 = r6.signIn;
                    var _closure1_slot2 = r7;
                    r7 = r6.signOut;
                    var _closure1_slot3 = r7;
                    r27 = r6.signingIn;
                    r6 = r6.reloadMe;
                    var _closure1_slot4 = r6;
                    r6 = _closure0_slot9;
                    r6 = r6.useSafeAreaInsets;
                    r30 = r6.bind(r2)();
                    r6 = _closure0_slot7;
                    r7 = r6.useState;
                    r3 = true;
                    r8 = r7.bind(r2)(r3);
                    r9 = r8;
                    r7 = r9[Symbol.iterator];
                    r9 = r7().next;
                    r8 = r9;
                    r8 = r8().value;
                    r10 = r7;
                    r3 = r10 === r2;
                    r26 = undefined;
                    if(r3) { _fun8491_ip = 136; continue _fun8491 }
case 133:
                    r26 = r8;
case 136:
                    r8 = undefined;
                    if(r3) { _fun8491_ip = 166; continue _fun8491 }
case 141:
                    r9 = r9().value;
                    r10 = r7;
                    r4 = r10 === r2;
                    r8 = undefined;
                    r3 = r4;
                    if(r4) { _fun8491_ip = 166; continue _fun8491 }
case 160:
                    r8 = r9;
                    r3 = r4;
case 166:
                    var _closure1_slot5 = r8;
                    if(r3) { _fun8491_ip = 176; continue _fun8491 }
case 173:
                    r7.return();
case 176:
                    r7 = r6.useState;
                    r3 = false;
                    r8 = r7.bind(r2)(r3);
                    r9 = r8;
                    r7 = r9[Symbol.iterator];
                    r9 = r7().next;
                    r8 = r9;
                    r8 = r8().value;
                    r10 = r7;
                    r4 = r10 === r2;
                    r22 = undefined;
                    if(r4) { _fun8491_ip = 216; continue _fun8491 }
case 213:
                    r22 = r8;
case 216:
                    r8 = undefined;
                    if(r4) { _fun8491_ip = 246; continue _fun8491 }
case 221:
                    r9 = r9().value;
                    r10 = r7;
                    r5 = r10 === r2;
                    r8 = undefined;
                    r4 = r5;
                    if(r5) { _fun8491_ip = 246; continue _fun8491 }
case 240:
                    r8 = r9;
                    r4 = r5;
case 246:
                    var _closure1_slot6 = r8;
                    if(r4) { _fun8491_ip = 256; continue _fun8491 }
case 253:
                    r7.return();
case 256:
                    r7 = r6.useState;
                    r8 = r7.bind(r2)(r3);
                    r9 = r8;
                    r7 = r9[Symbol.iterator];
                    r9 = r7().next;
                    r8 = r9;
                    r8 = r8().value;
                    r10 = r7;
                    r3 = r10 === r2;
                    r32 = undefined;
                    if(r3) { _fun8491_ip = 294; continue _fun8491 }
case 291:
                    r32 = r8;
case 294:
                    r8 = undefined;
                    if(r3) { _fun8491_ip = 324; continue _fun8491 }
case 299:
                    r9 = r9().value;
                    r10 = r7;
                    r4 = r10 === r2;
                    r8 = undefined;
                    r3 = r4;
                    if(r4) { _fun8491_ip = 324; continue _fun8491 }
case 318:
                    r8 = r9;
                    r3 = r4;
case 324:
                    var _closure1_slot7 = r8;
                    if(r3) { _fun8491_ip = 334; continue _fun8491 }
case 331:
                    r7.return();
case 334:
                    r7 = _closure0_slot12;
                    r9 = r7.useApiQuery;
                    r10 = r6.useCallback;
                    r8 = new Array(0);
                    r7 = function() { // Environment: r17
                        r1 = _closure0_slot11;
                        r1 = r1.fetchAppConfig;
                        r0 = undefined;
                        r1 = r1.bind(r0)();
                        return r1;
                    };
                    r8 = r10.bind(r2)(r7, r8);
                    r7 = new Array(0);
                    r7 = r9.bind(r2)(r8, r7);
                    var _closure1_slot8 = r7;
                    r7 = function() { // Original name: handleSignIn, environment: r20
                        r0 = undefined;
                        r2 = undefined;
                        r2 = arguments;
                        r4 = r2;
                        r3 = spawnAsync;
                        r2 = function() { // Original name: ?anon_0_handleSignIn, environment: r2
                            r0 = 0;
                            var _closure2_slot4 = r0;
                            var _closure2_slot5 = r0;
                            var _closure2_slot3 = r0;
                            r1 = function* () { // Original name: ?anon_0_handleSignIn, environment: r1
                                _fun15098: for(var _fun15098_ip = 0; ; ) switch(_fun15098_ip) {
case 0:
                                    r0 = _closure2_slot5;
                                    r2 = r0;
                                    r4 = 2;
                                    if(!(r0 !== r4)) { _fun15098_ip = 340; continue _fun15098 }
case 20:
                                    r0 = arguments[1];
                                    r3 = arguments[0];
                                    r13 = r2;
                                    r7 = 3;
                                    r5 = 1;
                                    r12 = 0;
                                    r10 = undefined;
                                    r9 = 'ÄÄƒng nháº­p khÃ´ng thÃ nh cÃ´ng';
                                    r8 = 'Vui lÃ²ng thá»­ láº¡i sau.';
                                    if(!(r13 !== r7)) { _fun15098_ip = 310; continue _fun15098 }
case 57:
                                    r2 = r4;
                                    _closure2_slot5 = r4;
                                    r13 = _closure2_slot4;
                                    if(!(r12 !== r13)) { _fun15098_ip = 226; continue _fun15098 }
case 75:
                                    if(!(r5 !== r13)) { _fun15098_ip = 125; continue _fun15098 }
case 79:
                                    if(!(r3 !== r5)) { _fun15098_ip = 116; continue _fun15098 }
case 83:
                                    if(!(r3 !== r4)) { _fun15098_ip = 93; continue _fun15098 }
case 87:
                                    _closure2_slot3 = r12;
                                    _fun15098_ip = 211; continue _fun15098;
case 93:
                                    _closure2_slot3 = r12;
                                    r2 = r7;
                                    _closure2_slot5 = r7;
                                    r13 = {'value': null, 'done': true};
                                    r13[0] = r0;
                                    return r13;
case 116:
                                    r2 = r7;
                                    _closure2_slot5 = r7;
                                    throw r0;
case 125:
                                    r16 = _closure2_slot0;
                                    r13 = _closure2_slot1;
                                    r14 = _closure2_slot2;
                                    r6 = r14;
                                    _closure2_slot3 = r12;
                                    _env_r16_slot0 = r14;
                                    r14 = _closure1_slot8;
                                    r15 = r14.Alert;
                                    r14 = r15.alert;
                                    r16 = _env_r16_slot0;
                                    r13 = _closure1_slot10;
                                    r13 = r13.ApiError;
                                    r16 = r16 instanceof r13;
                                    r13 = r8;
                                    if(!r16) { _fun15098_ip = 205; continue _fun15098 }
case 192:
                                    r16 = _closure2_slot0;
                                    r16 = _env_r16_slot0;
                                    r13 = r16.message;
case 205:
                                    r13 = r14.bind(r15)(r9, r13);
case 211:
                                    r2 = r7;
                                    _closure2_slot5 = r7;
                                    r13 = {'value': undefined, 'done': true};
                                    return r13;
case 226:
                                    var _closure2_slot1 = r11;
                                    var _closure2_slot0 = r13;
                                    _closure2_slot3 = r5;
                                    r13 = _closure1_slot2;
                                    r14 = r13.bind(r10)();
                                    _closure2_slot4 = r4;
                                    r2 = r5;
                                    _closure2_slot5 = r5;
                                    r13 = {'value': null, 'done': false};
                                    r13[0] = r14;
                                    return r13;
case 275:
                                    CatchBlockStart(arg_register=13);
                                    r6 = r13;
                                    var _closure2_slot2 = r13;
                                    r13 = _closure2_slot3;
                                    if(!(r12 !== r13)) { _fun15098_ip = 301; continue _fun15098 }
case 292:
                                    _closure2_slot4 = r5;
                                    _fun15098_ip = 57; continue _fun15098;
case 301:
                                    r2 = r7;
                                    _closure2_slot5 = r7;
                                    throw r6;
case 310:
                                    if(!(r3 !== r5)) { _fun15098_ip = 338; continue _fun15098 }
case 314:
                                    if(!(r3 !== r4)) { _fun15098_ip = 326; continue _fun15098 }
case 318:
                                    r3 = {'value': undefined, 'done': true};
                                    return r3;
case 326:
                                    r3 = {'value': null, 'done': true};
                                    r3[0] = r0;
                                    return r3;
case 338:
                                    throw r0;
case 340:
                                    r0 = 3;
                                    r2 = r0;
                                    _closure2_slot5 = r0;
                                    r18 = 'Generator functions may not be called on executing generators';
                                    r0 = throwTypeError(r19);
                                }
                            };
                            return r1;
                        };
                        r1 = this;
                        r2 = r3.bind(r0)(r2, r1, r4);
                        return r2;
                    };
                    var _closure1_slot9 = r7;
