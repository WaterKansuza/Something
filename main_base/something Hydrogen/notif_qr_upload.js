// === MODULE 1340: PUSH NOTIFICATION TAP ROUTER (390200 - 390581) ===
                r5 = r1.survey_id;
                if(!(typeof r3 === 'boolean')) { _fun8489_ip = 53; continue _fun8489 }
case 47:
                if(r3) { _fun8489_ip = 209; continue _fun8489 }
case 53:
                r1 = 'exam_reminder';
                if(!(r2 !== r1)) { _fun8489_ip = 203; continue _fun8489 }
case 64:
                r1 = 'event_new';
                if(!(r2 !== r1)) { _fun8489_ip = 80; continue _fun8489 }
case 72:
                r1 = 'event_reminder';
                if(!(r2 === r1)) { _fun8489_ip = 91; continue _fun8489 }
case 80:
                if(!(typeof r4 === 'boolean')) { _fun8489_ip = 91; continue _fun8489 }
case 88:
                if(r4) { _fun8489_ip = 179; continue _fun8489 }
case 91:
                r1 = 'survey_new';
                if(!(r2 === r1)) { _fun8489_ip = 110; continue _fun8489 }
case 99:
                if(!(typeof r5 === 'boolean')) { _fun8489_ip = 110; continue _fun8489 }
case 107:
                if(r5) { _fun8489_ip = 155; continue _fun8489 }
case 110:
                r1 = 'service_request';
                if(!(r2 === r1)) { _fun8489_ip = 129; continue _fun8489 }
case 118:
                if(!(typeof r6 === 'boolean')) { _fun8489_ip = 129; continue _fun8489 }
case 126:
                if(r6) { _fun8489_ip = 131; continue _fun8489 }
case 129:
                return r0;
case 131:
                r1 = global;
                r1 = r1.HermesInternal;
                r2 = r1.concat;
                r1 = '/me/requests/';
                r1 = r2.bind(r1)(r6);
                return r1;
case 155:
                r1 = global;
                r1 = r1.HermesInternal;
                r2 = r1.concat;
                r1 = '/surveys/';
                r1 = r2.bind(r1)(r5);
                return r1;
case 179:
                r1 = global;
                r1 = r1.HermesInternal;
                r2 = r1.concat;
                r1 = '/events/';
                r1 = r2.bind(r1)(r4);
                return r1;
case 203:
                r1 = '/me/exams';
                return r1;
case 209:
                r1 = global;
                r1 = r1.HermesInternal;
                r2 = r1.concat;
                r1 = '/post/';
                r1 = r2.bind(r1)(r3);
                return r1;
            }
        };
        r2['duongDanTu'] = r1;
        return r0;
    };
    r9 = r11.bind(r5)(r9, r0, r10);
    r11 = r8.__d;
    r0 = 1340;
    r10 = [587, 282, 1319, 1320, 228];
    r9 = function(a0, a1, a2, a3, a4, a5, a6) {
        r5 = a1;
        r6 = a5;
        r4 = a6;
        r2 = global;
        r9 = r2.Object;
        r8 = r9.defineProperty;
        r7 = '__esModule';
        r2 = {'value': true};
        r2 = r8.bind(r9)(r6, r7, r2);
        r2 = function(a0) { // Original name: InboxRow, environment: r3
            _fun8490: for(var _fun8490_ip = 0; ; ) switch(_fun8490_ip) {
case 0:
                r2 = a0;
                r13 = r2.item;
                var _closure1_slot0 = r13;
                r2 = r2.onPress;
                var _closure1_slot1 = r2;
                r0 = undefined;
                var _closure1_slot2 = r0;
                r14 = r13.is_read;
                r16 = !r14;
                _closure1_slot2 = r16;
                r11 = _closure0_slot4;
                r4 = r11.jsxs;
                r6 = _closure0_slot1;
                r3 = r6.Pressable;
                r2 = {'style': null, 'onPress': null, 'children': null};
                r7 = function(a0) { // Original name: style, environment: r5
                    _fun12688: for(var _fun12688_ip = 0; ; ) switch(_fun12688_ip) {
case 0:
                        r0 = a0;
                        r1 = r0.pressed;
                        r2 = _closure0_slot5;
                        r3 = r2.row;
                        r0 = new Array(3);
                        r0[0] = r3;
                        r3 = _closure1_slot2;
                        if(!r3) { _fun12688_ip = 45; continue _fun12688 }
case 39:
                        r3 = r2.rowUnread;
case 45:
                        r0[1] = r3;
                        if(!r1) { _fun12688_ip = 57; continue _fun12688 }
case 52:
                        r1 = r2.pressed;
case 57:
                        r0[2] = r1;
                        return r0;
                    }
                };
                r2[0] = r7;
                r5 = function() { // Original name: onPress, environment: r5
                    r2 = _closure1_slot1;
                    r1 = _closure1_slot0;
                    r0 = undefined;
                    r1 = r2.bind(r0)(r1);
                    return r1;
                };
                r2[1] = r5;
                r1 = null;
                r7 = null;
                if(r14) { _fun8490_ip = 132; continue _fun8490 }
case 96:
                r10 = r11.jsx;
                r8 = r6.View;
                r5 = {'style': null};
                r12 = _closure0_slot5;
                r12 = r12.marker;
                r5[0] = r12;
                r7 = r10.bind(r0)(r8, r5);
case 132:
                r5 = new Array(3);
                r5[0] = r7;
                r10 = r11.jsx;
                r8 = r6.View;
                r15 = _closure0_slot5;
                r7 = r15.icon;
                r12 = new Array(2);
                r12[0] = r7;
                if(r14) { _fun8490_ip = 176; continue _fun8490 }
case 170:
                r16 = r15.iconUnread;
case 176:
                r7 = {'style': null, 'children': null};
                r12[1] = r16;
                r7[0] = r12;
                r17 = r11.jsx;
                r12 = _closure0_slot0;
                r16 = r12.MaterialIcons;
                r20 = r13.type;
                r12 = 'event_new';
                if(!(r12 !== r20)) { _fun8490_ip = 299; continue _fun8490 }
case 218:
                r12 = 'event_reminder';
                if(!(r12 !== r20)) { _fun8490_ip = 299; continue _fun8490 }
case 226:
                r12 = 'survey_new';
                if(!(r12 !== r20)) { _fun8490_ip = 293; continue _fun8490 }
case 234:
                r12 = 'exam_reminder';
                if(!(r12 !== r20)) { _fun8490_ip = 287; continue _fun8490 }
case 242:
                r12 = 'service_request';
                if(!(r12 !== r20)) { _fun8490_ip = 281; continue _fun8490 }
case 250:
                r12 = 'article';
                if(!(r12 !== r20)) { _fun8490_ip = 276; continue _fun8490 }
case 258:
                r18 = 'newspaper';
                r19 = 'news';
                if(!(r19 !== r20)) { _fun8490_ip = 303; continue _fun8490 }
case 270:
                r18 = 'notifications';
                _fun8490_ip = 303; continue _fun8490;
case 276:
                r18 = r12;
                _fun8490_ip = 303; continue _fun8490;
case 281:
                r18 = 'description';
                _fun8490_ip = 303; continue _fun8490;
case 287:
                r18 = 'schedule';
                _fun8490_ip = 303; continue _fun8490;
case 293:
                r18 = 'assignment';
                _fun8490_ip = 303; continue _fun8490;
case 299:
                r18 = 'event';
case 303:
                r12 = {'name': null, 'size': 22, 'color': null, 'style': null};
                r12[0] = r18;
                r20 = _closure0_slot3;
                r19 = r20.colors;
                if(r14) { _fun8490_ip = 336; continue _fun8490 }
case 325:
                r18 = r19.secondary;
                r14 = r20;
                _fun8490_ip = 345; continue _fun8490;
case 336:
                r18 = r19.tertiary;
                r14 = r20;
case 345:
                r12[2] = r18;
                r18 = r15.glyph;
                r12[3] = r18;
                r12 = r17.bind(r0)(r16, r12);
                r7[1] = r12;
                r7 = r10.bind(r0)(r8, r7);
                r5[1] = r7;
                r8 = r11.jsxs;
                r7 = r6.View;
                r6 = {'style': null, 'children': null};
                r10 = r15.body;
                r6[0] = r10;
                r16 = r11.jsx;
                r10 = _closure0_slot2;
                r12 = r10.Text;
                r9 = {'style': null, 'numberOfLines': 3, 'children': null};
                r17 = r15.title;
                r9[0] = r17;
                r17 = r13.title;
                r9[2] = r17;
                r12 = r16.bind(r0)(r12, r9);
                r9 = new Array(3);
                r9[0] = r12;
                r16 = r13.body;
                r12 = null;
                if(!r16) { _fun8490_ip = 507; continue _fun8490 }
case 466:
                r18 = r11.jsx;
                r17 = r10.Text;
                r16 = {'style': null, 'numberOfLines': 3, 'children': null};
                r19 = r15.excerpt;
                r16[0] = r19;
                r19 = r13.body;
                r16[2] = r19;
                r12 = r18.bind(r0)(r17, r16);
case 507:
                r9[1] = r12;
                r12 = r11.jsx;
                r11 = r10.Text;
                r10 = {'style': null, 'children': null};
                r15 = r15.date;
                r10[0] = r15;
                r14 = r14.formatDate;
                r13 = r13.created_at;
                if(!(r13 == r1)) { _fun8490_ip = 555; continue _fun8490 }
case 553:
                r13 = undefined;
case 555:
                r13 = r14.bind(r0)(r13);
                r10[1] = r13;
                r10 = r12.bind(r0)(r11, r10);
                r9[2] = r10;
                r6[1] = r9;
                r6 = r8.bind(r0)(r7, r6);
                r5[2] = r6;
                r2[2] = r5;
                r2 = r4.bind(r0)(r3, r2);
                return r2;
            }
        };
        r6['InboxRow'] = r2;
        r2 = r4[r0];
        r1 = undefined;
        r2 = r5.bind(r1)(r2);
        var _closure0_slot0 = r2;
        r2 = r4[r1];
        r2 = r5.bind(r1)(r2);
        var _closure0_slot1 = r2;
        r6 = r4[r2];
        r6 = r5.bind(r1)(r6);
        var _closure0_slot2 = r6;
        r6 = r4[r3];
        r7 = r5.bind(r1)(r6);
        var _closure0_slot3 = r7;
        r4 = r4[r4];
        r4 = r5.bind(r1)(r4);
        var _closure0_slot4 = r4;
        r5 = r2.StyleSheet;
        r4 = r5.create;
        r2 = {'row': null, 'rowUnread': null, 'pressed': null, 'marker': null, 'icon': null, 'iconUnread': null, 'glyph': null, 'body': null, 'title': null, 'excerpt': null, 'date': null};
        r6 = {'flexDirection': 'row', 'gap': null, 'paddingHorizontal': null, 'paddingVertical': null, 'borderBottomWidth': 1, 'borderBottomColor': null, 'backgroundColor': null};
        r8 = r7.spacing;
        r8 = r8.lg;
        r6[1] = r8;
        r8 = r7.spacing;
        r8 = r8.marginPage;
        r6[2] = r8;
        r8 = r7.spacing;
        r8 = r8.lg;
        r6[3] = r8;
        r8 = r7.colors;
        r8 = r8.border;
        r6[5] = r8;
        r8 = r7.colors;
        r8 = r8.background;
        r6[6] = r8;
        r2[0] = r6;
        r6 = {'backgroundColor': null};
        r8 = r7.colors;
        r8 = r8.surface;
        r6[0] = r8;
        r2[1] = r6;
        r6 = {'backgroundColor': null};
        r8 = r7.colors;
        r8 = r8.surfaceLow;
        r6[0] = r8;
        r2[2] = r6;
        r6 = {'position': 'absolute', 'left': 0, 'top': 0, 'bottom': 0, 'width': 4, 'backgroundColor': null};
        r8 = r7.colors;
        r8 = r8.primary;
        r6[5] = r8;
        r2[3] = r6;
        r6 = {'width': 48, 'height': 48, 'borderRadius': null, 'backgroundColor': null, 'alignItems': 'center', 'justifyContent': 'center'};
        r8 = r7.radius;
        r8 = r8.full;
        r6[2] = r8;
        r8 = r7.colors;
        r8 = r8.surfaceContainer;
        r6[3] = r8;
        r2[4] = r6;
        r6 = {'backgroundColor': null};
        r8 = r7.colors;
        r8 = r8.secondarySoft;
        r6[0] = r8;
        r2[5] = r6;
        r6 = {'width': 22, 'height': 22, 'lineHeight': 22, 'textAlign': 'center'};
        r2[6] = r6;
        r6 = {'flex': 1, 'gap': null};
        r8 = r7.spacing;
        r8 = r8.xs;
        r6[1] = r8;
        r2[7] = r6;
        r6 = {};
        r8 = r7.type;
        r11 = r8.headlineSm;
        r12 = r6;
        r8 = copyDataProperties(r13, r12);
        r8 = r7.colors;
        r8 = r8.text;
        r6['color'] = r8;
        r2[8] = r6;
        r6 = {};
        r8 = r7.type;
        r11 = r8.bodyMd;
        r12 = r6;
        r8 = copyDataProperties(r13, r12);
        r8 = r7.colors;
        r8 = r8.textMuted;
        r6['color'] = r8;
        r2[9] = r6;
        r6 = {};
        r8 = r7.type;
        r11 = r8.labelMd;
        r12 = r6;
        r8 = copyDataProperties(r13, r12);
        r7 = r7.colors;
        r7 = r7.tertiary;
        r6['color'] = r7;
        r0 = 2;
        r6['marginTop'] = r0;
        r2[10] = r6;
        r2 = r4.bind(r5)(r2);
        var _closure0_slot5 = r2;
        return r1;
    };
    r9 = r11.bind(r5)(r9, r0, r10);
// === EVENT QR CHECK-IN & FILE UPLOAD UI VALIDATION (493000 - 496615) ===
        r9 = a5;
        r4 = a6;
        r2 = function() { // Original name: EventsScreen, environment: r3
            _fun10169: for(var _fun10169_ip = 0; ; ) switch(_fun10169_ip) {
case 0:
                r7 = _closure0_slot1;
                r5 = r7.useRouter;
                r1 = undefined;
                r5 = r5.bind(r1)();
                var _closure1_slot0 = r5;
                r5 = _closure0_slot2;
                r8 = r5.useState;
                r6 = 'upcoming';
                r8 = r8.bind(r1)(r6);
                r9 = r8;
                r6 = r9[Symbol.iterator];
                r9 = r6().next;
                r8 = r9;
                r8 = r8().value;
                r10 = r6;
                r2 = r10 === r1;
                r20 = undefined;
                if(r2) { _fun10169_ip = 72; continue _fun10169 }
case 69:
                r20 = r8;
case 72:
                var _closure1_slot1 = r20;
                r8 = undefined;
                if(r2) { _fun10169_ip = 106; continue _fun10169 }
case 81:
                r9 = r9().value;
                r10 = r6;
                r3 = r10 === r1;
                r8 = undefined;
                r2 = r3;
                if(r3) { _fun10169_ip = 106; continue _fun10169 }
case 100:
                r8 = r9;
                r2 = r3;
case 106:
                var _closure1_slot2 = r8;
                if(r2) { _fun10169_ip = 116; continue _fun10169 }
case 113:
                r6.return();
case 116:
                r6 = r5.useState;
                r0 = 0;
                r8 = r6.bind(r1)(r0);
                r10 = r8;
                r6 = r10[Symbol.iterator];
                r10 = r6().next;
                r8 = r10;
                r8 = r8().value;
                r9 = r6;
                r2 = r9 === r1;
                r9 = undefined;
                if(r2) { _fun10169_ip = 156; continue _fun10169 }
case 153:
                r9 = r8;
case 156:
                r8 = undefined;
                if(r2) { _fun10169_ip = 186; continue _fun10169 }
case 161:
                r10 = r10().value;
                r11 = r6;
                r3 = r11 === r1;
                r8 = undefined;
                r2 = r3;
                if(r3) { _fun10169_ip = 186; continue _fun10169 }
case 180:
                r8 = r10;
                r2 = r3;
case 186:
                var _closure1_slot3 = r8;
                if(r2) { _fun10169_ip = 196; continue _fun10169 }
case 193:
                r6.return();
case 196:
                r6 = _closure0_slot5;
                r8 = r6.useApiQuery;
                r10 = r5.useCallback;
                r6 = new Array(1);
                r6[0] = r20;
                r5 = function() { // Environment: r15
                    r1 = _closure0_slot4;
                    r2 = r1.fetchEvents;
                    r1 = _closure1_slot1;
                    r0 = undefined;
                    r1 = r2.bind(r0)(r1);
                    return r1;
                };
                r6 = r10.bind(r1)(r5, r6);
                r5 = new Array(2);
                r5[0] = r20;
                r5[1] = r9;
                r16 = r8.bind(r1)(r6, r5);
                r19 = r16.data;
                r2 = null;
                if(!(r19 == r2)) { _fun10169_ip = 263; continue _fun10169 }
case 259:
                r19 = new Array(0);
case 263:
                r13 = _closure0_slot9;
                r6 = r13.jsxs;
                r5 = r13.Fragment;
                r9 = r13.jsx;
                r7 = r7.Stack;
                r8 = r7.Screen;
                r7 = {'options': null};
                r10 = {'title': 'Sá»± kiá»‡n'};
                r7[0] = r10;
                r8 = r9.bind(r1)(r8, r7);
                r7 = new Array(2);
                r7[0] = r8;
                r10 = r13.jsxs;
                r18 = _closure0_slot3;
                r9 = r18.View;
                r8 = {'style': null, 'children': null};
                r21 = _closure0_slot15;
                r11 = r21.screen;
                r8[0] = r11;
                r14 = r13.jsx;
                r12 = r18.View;
                r11 = {'style': null, 'children': null};
                r17 = r21.tabs;
                r11[0] = r17;
                r23 = _closure0_slot10;
                r22 = r23.map;
                r17 = function(a0) { // Environment: r15
                    _fun13384: for(var _fun13384_ip = 0; ; ) switch(_fun13384_ip) {
case 0:
                        r1 = a0;
                        var _closure2_slot0 = r1;
                        r3 = r1.key;
                        r2 = _closure1_slot1;
                        r9 = r3 === r2;
                        var _closure2_slot1 = r9;
                        r6 = _closure0_slot9;
                        r4 = r6.jsx;
                        r2 = _closure0_slot3;
                        r3 = r2.Pressable;
                        r2 = {'style': null, 'onPress': null, 'children': null};
                        r8 = function(a0) { // Original name: style, environment: r7
                            _fun14803: for(var _fun14803_ip = 0; ; ) switch(_fun14803_ip) {
case 0:
                                r1 = a0;
                                r2 = r1.pressed;
                                r3 = _closure0_slot15;
                                r4 = r3.tab;
                                r1 = new Array(3);
                                r1[0] = r4;
                                r0 = _closure2_slot1;
                                r4 = r0;
                                if(!r4) { _fun14803_ip = 48; continue _fun14803 }
case 42:
                                r4 = r3.tabActive;
case 48:
                                r1[1] = r4;
                                if(!r2) { _fun14803_ip = 58; continue _fun14803 }
case 55:
                                r2 = !r0;
case 58:
                                if(!r2) { _fun14803_ip = 67; continue _fun14803 }
case 61:
                                r2 = r3.tabPressed;
case 67:
                                r1[2] = r2;
                                return r1;
                            }
                        };
                        r2[0] = r8;
                        r7 = function() { // Original name: onPress, environment: r7
                            r2 = _closure1_slot2;
                            r1 = _closure2_slot0;
                            r1 = r1.key;
                            r0 = undefined;
                            r1 = r2.bind(r0)(r1);
                            return r1;
                        };
                        r2[1] = r7;
                        r7 = r6.jsx;
                        r6 = _closure0_slot8;
                        r6 = r6.Text;
                        r5 = _closure0_slot15;
                        r10 = r5.tabText;
                        r8 = new Array(2);
                        r8[0] = r10;
                        if(!r9) { _fun13384_ip = 116; continue _fun13384 }
case 110:
                        r9 = r5.tabTextActive;
case 116:
                        r5 = {'style': null, 'children': null};
                        r8[1] = r9;
                        r5[0] = r8;
                        r8 = r1.label;
                        r5[1] = r8;
                        r0 = undefined;
                        r5 = r7.bind(r0)(r6, r5);
                        r2[2] = r5;
                        r1 = r1.key;
                        r1 = r4.bind(r0)(r3, r2, r1);
                        return r1;
                    }
                };
                r17 = r22.bind(r23)(r17);
                r11[1] = r17;
                r12 = r14.bind(r1)(r12, r11);
                r11 = new Array(2);
                r11[0] = r12;
                r12 = r16.error;
                if(r12) { _fun10169_ip = 675; continue _fun10169 }
case 434:
                r12 = r16.loading;
                if(r12) { _fun10169_ip = 650; continue _fun10169 }
case 446:
                r12 = r19.length;
                if(!(r12 !== r0)) { _fun10169_ip = 590; continue _fun10169 }
case 458:
                r17 = r13.jsx;
                r14 = r18.FlatList;
                r12 = {'style': null, 'contentContainerStyle': null, 'data': null, 'keyExtractor': null, 'refreshControl': null, 'renderItem': null};
                r22 = r21.list;
                r12[0] = r22;
                r21 = r21.content;
                r12[1] = r21;
                r12[2] = r19;
                r19 = function(a0) { // Original name: keyExtractor
                    r0 = a0;
                    r0 = r0.slug;
                    return r0;
                };
                r12[3] = r19;
                r21 = r13.jsx;
                r19 = r18.RefreshControl;
                r18 = {'refreshing': null, 'onRefresh': null, 'tintColor': null};
                r22 = r16.refreshing;
                r18[0] = r22;
                r22 = r16.refresh;
                r18[1] = r22;
                r22 = _closure0_slot6;
                r22 = r22.colors;
                r22 = r22.primary;
                r18[2] = r22;
                r18 = r21.bind(r1)(r19, r18);
                r12[4] = r18;
                r18 = function(a0) { // Original name: renderItem, environment: r15
                    r1 = a0;
                    r5 = r1.item;
                    var _closure2_slot0 = r5;
                    r2 = _closure0_slot9;
                    r3 = r2.jsx;
                    r2 = _closure0_slot13;
                    r1 = {'event': null, 'onPress': null};
                    r1[0] = r5;
                    r4 = function() { // Original name: onPress, environment: r4
                        r2 = _closure1_slot0;
                        r1 = r2.push;
                        r0 = _closure2_slot0;
                        r4 = r0.slug;
                        r0 = global;
                        r0 = r0.HermesInternal;
                        r3 = r0.concat;
                        r0 = '/events/';
                        r0 = r3.bind(r0)(r4);
                        r0 = r1.bind(r2)(r0);
                        return r0;
                    };
                    r1[1] = r4;
                    r0 = undefined;
                    r1 = r3.bind(r0)(r2, r1);
                    return r1;
                };
                r12[5] = r18;
                r12 = r17.bind(r1)(r14, r12);
                _fun10169_ip = 648; continue _fun10169;
case 590:
                r18 = r13.jsx;
                r14 = _closure0_slot7;
                r17 = r14.EmptyState;
                r14 = {'title': null, 'hint': null};
                r19 = _closure0_slot11;
                r21 = r19[r20];
                r21 = r21.title;
                r14[0] = r21;
                r19 = r19[r20];
                r19 = r19.hint;
                r14[1] = r19;
                r12 = r18.bind(r1)(r17, r14);
case 648:
                _fun10169_ip = 673; continue _fun10169;
case 650:
                r18 = r13.jsx;
                r14 = _closure0_slot7;
                r17 = r14.LoadingState;
                r14 = {};
                r12 = r18.bind(r1)(r17, r14);
case 673:
                _fun10169_ip = 725; continue _fun10169;
case 675:
                r14 = r13.jsx;
                r4 = _closure0_slot7;
                r13 = r4.ErrorState;
                r4 = {'message': null, 'onRetry': null};
                r16 = r16.error;
                r16 = r16.message;
                r4[0] = r16;
                r15 = function() { // Original name: onRetry, environment: r15
                    r2 = _closure1_slot3;
                    r0 = undefined;
                    r1 = function(a0) {
                        r0 = 1;
                        r1 = a0;
                        r1 = r1 + r0;
                        return r1;
                    };
                    r1 = r2.bind(r0)(r1);
                    return r1;
                };
                r4[1] = r15;
                r12 = r14.bind(r1)(r13, r4);
case 725:
                r4 = {'children': null};
                r11[1] = r12;
                r8[1] = r11;
                r8 = r10.bind(r1)(r9, r8);
                r7[1] = r8;
                r4[0] = r7;
                r4 = r6.bind(r1)(r5, r4);
                return r4;
            }
        };
        var _closure0_slot12 = r2;
        r2 = function(a0) { // Original name: EventCard, environment: r3
            _fun10170: for(var _fun10170_ip = 0; ; ) switch(_fun10170_ip) {
case 0:
                r3 = a0;
                r19 = r3.event;
                r6 = r3.onPress;
                r13 = r19.my_registration;
                r17 = _closure0_slot9;
                r5 = r17.jsxs;
                r11 = _closure0_slot3;
                r4 = r11.Pressable;
                r3 = {'style': null, 'onPress': null, 'children': null};
                r7 = function(a0) { // Original name: style, environment: r16
                    _fun13388: for(var _fun13388_ip = 0; ; ) switch(_fun13388_ip) {
case 0:
                        r0 = a0;
                        r1 = r0.pressed;
                        r2 = _closure0_slot15;
                        r3 = r2.card;
                        r0 = new Array(2);
                        r0[0] = r3;
                        if(!r1) { _fun13388_ip = 38; continue _fun13388 }
case 32:
                        r1 = r2.cardPressed;
case 38:
                        r0[1] = r1;
                        return r0;
                    }
                };
                r3[0] = r7;
                r3[1] = r6;
                r6 = r19.cover_url;
                r1 = null;
                r7 = null;
                if(!r6) { _fun10170_ip = 132; continue _fun10170 }
case 73:
                r9 = r17.jsx;
                r8 = r11.Image;
                r6 = {'source': null, 'style': null, 'resizeMode': 'cover'};
                r10 = {'uri': null};
                r12 = r19.cover_url;
                r10[0] = r12;
                r6[0] = r10;
                r10 = _closure0_slot15;
                r10 = r10.cover;
                r6[1] = r10;
                r0 = undefined;
                r7 = r9.bind(r0)(r8, r6);
case 132:
                r6 = new Array(2);
                r6[0] = r7;
                r9 = r17.jsxs;
                r8 = r11.View;
                r7 = {'style': null, 'children': null};
                r14 = _closure0_slot15;
                r10 = r14.cardBody;
                r7[0] = r10;
                r15 = r17.jsx;
                r22 = _closure0_slot8;
                r12 = r22.Text;
                r10 = {'style': null, 'numberOfLines': 2, 'children': null};
                r18 = r14.title;
                r10[0] = r18;
                r18 = r19.title;
                r10[2] = r18;
                r0 = undefined;
                r12 = r15.bind(r0)(r12, r10);
                r10 = new Array(4);
                r10[0] = r12;
                r18 = r17.jsxs;
                r15 = r11.View;
                r12 = {'style': null, 'children': null};
                r20 = r14.metaRow;
                r12[0] = r20;
                r24 = r17.jsx;
                r21 = _closure0_slot0;
                r23 = r21.MaterialIcons;
                r20 = {'name': 'event', 'size': 15, 'color': null};
                r25 = _closure0_slot6;
                r26 = r25.colors;
                r26 = r26.tertiary;
                r20[2] = r26;
                r23 = r24.bind(r0)(r23, r20);
                r20 = new Array(2);
                r20[0] = r23;
                r26 = r17.jsxs;
                r24 = r22.Text;
                r23 = {'style': null, 'children': null};
                r27 = r14.meta;
                r23[0] = r27;
                r28 = r25.formatEventDay;
                r27 = r19.starts_at;
                r28 = r28.bind(r0)(r27);
                r27 = new Array(3);
                r27[0] = r28;
                r28 = ' Â· ';
                r27[1] = r28;
                r30 = r25.formatEventTime;
                r29 = r19.starts_at;
                r28 = r19.ends_at;
                r28 = r30.bind(r0)(r29, r28);
                r27[2] = r28;
                r23[1] = r27;
                r23 = r26.bind(r0)(r24, r23);
                r20[1] = r23;
                r12[1] = r20;
                r12 = r18.bind(r0)(r15, r12);
                r10[1] = r12;
                r15 = r19.location;
                r12 = null;
                if(!r15) { _fun10170_ip = 573; continue _fun10170 }
case 437:
                r20 = r17.jsxs;
                r18 = r11.View;
                r15 = {'style': null, 'children': null};
                r23 = r14.metaRow;
                r15[0] = r23;
                r24 = r17.jsx;
                r23 = r21.MaterialIcons;
                r21 = {'name': 'place', 'size': 15, 'color': null};
                r25 = r25.colors;
                r25 = r25.tertiary;
                r21[2] = r25;
                r23 = r24.bind(r0)(r23, r21);
                r21 = new Array(2);
                r21[0] = r23;
                r24 = r17.jsx;
                r23 = r22.Text;
                r22 = {'style': null, 'numberOfLines': 1, 'children': null};
                r25 = r14.meta;
                r22[0] = r25;
                r25 = r19.location;
                r22[2] = r25;
                r22 = r24.bind(r0)(r23, r22);
                r21[1] = r22;
                r15[1] = r21;
                r12 = r20.bind(r0)(r18, r15);
case 573:
                r2 = r13 !== r1;
                r10[2] = r12;
                r13 = r17.jsxs;
                r12 = r11.View;
                r11 = {'style': null, 'children': null};
                r14 = r14.chips;
                r11[0] = r14;
                r15 = null;
                if(!r2) { _fun10170_ip = 637; continue _fun10170 }
case 612:
                r20 = r17.jsx;
                r18 = _closure0_slot14;
                r14 = {'label': 'ÄÃ£ Ä‘Äƒng kÃ½', 'tone': 'success'};
                r15 = r20.bind(r0)(r18, r14);
case 637:
                r14 = new Array(4);
                r14[0] = r15;
                r18 = r19.points_category_label;
                r15 = null;
                if(!r18) { _fun10170_ip = 691; continue _fun10170 }
case 656:
                r21 = r17.jsx;
                r20 = _closure0_slot14;
                r18 = {'label': null, 'tone': 'brand'};
                r22 = r19.points_category_label;
                r18[0] = r22;
                r15 = r21.bind(r0)(r20, r18);
case 691:
                r14[1] = r15;
                r18 = r19.is_full;
                r15 = null;
                if(!r18) { _fun10170_ip = 747; continue _fun10170 }
case 706:
                r15 = null;
                if(r2) { _fun10170_ip = 747; continue _fun10170 }
case 711:
                r18 = r19.has_ended;
                r15 = null;
                if(r18) { _fun10170_ip = 747; continue _fun10170 }
case 722:
                r21 = r17.jsx;
                r20 = _closure0_slot14;
                r18 = {'label': 'ÄÃ£ Ä‘á»§ sá»‘ lÆ°á»£ng', 'tone': 'warning'};
                r15 = r21.bind(r0)(r20, r18);
case 747:
                r14[2] = r15;
                r18 = r19.capacity;
                r15 = null;
                if(!(r18 !== r1)) { _fun10170_ip = 857; continue _fun10170 }
case 763:
                r18 = r19.is_full;
                r15 = null;
                if(r18) { _fun10170_ip = 857; continue _fun10170 }
case 774:
                r18 = r19.has_ended;
                r15 = null;
                if(r18) { _fun10170_ip = 857; continue _fun10170 }
case 785:
                r18 = r17.jsx;
                r17 = _closure0_slot14;
                r16 = {'label': null, 'tone': 'muted'};
                r20 = r19.capacity;
                r19 = r19.registered_count;
                r22 = r20 - r19;
                r19 = global;
                r19 = r19.HermesInternal;
                r21 = r19.concat;
                r20 = ' chá»—';
                r19 = 'CÃ²n ';
                r19 = r21.bind(r19)(r22, r20);
                r16[0] = r19;
                r15 = r18.bind(r0)(r17, r16);
case 857:
                r14[3] = r15;
                r11[1] = r14;
                r11 = r13.bind(r0)(r12, r11);
                r10[3] = r11;
                r7[1] = r10;
                r7 = r9.bind(r0)(r8, r7);
                r6[1] = r7;
                r3[2] = r6;
                r3 = r5.bind(r0)(r4, r3);
                return r3;
            }
        };
        var _closure0_slot13 = r2;
        r2 = function(a0) { // Original name: Chip, environment: r3
            r1 = a0;
            r7 = r1.label;
            r12 = r1.tone;
            r5 = _closure0_slot9;
            r3 = r5.jsx;
            r1 = _closure0_slot3;
            r2 = r1.View;
            r1 = {'style': null, 'children': null};
            r10 = _closure0_slot15;
            r8 = r10.chip;
            r6 = new Array(2);
            r6[0] = r8;
            r9 = global;
            r8 = r9.HermesInternal;
            r11 = r8.concat;
            r8 = 'chip_';
            r8 = r11.bind(r8)(r12);
            r8 = r10[r8];
            r6[1] = r8;
            r1[0] = r6;
            r6 = r5.jsx;
            r4 = _closure0_slot8;
            r5 = r4.Text;
            r4 = {'style': null, 'children': null};
            r11 = r10.chipText;
            r8 = new Array(2);
            r8[0] = r11;
            r9 = r9.HermesInternal;
            r11 = r9.concat;
            r9 = 'chipText_';
            r9 = r11.bind(r9)(r12);
            r9 = r10[r9];
            r8[1] = r9;
            r4[0] = r8;
            r4[1] = r7;
            r0 = undefined;
            r4 = r6.bind(r0)(r5, r4);
            r1[1] = r4;
            r1 = r3.bind(r0)(r2, r1);
            return r1;
        };
        var _closure0_slot14 = r2;
        r2 = global;
        r10 = r2.Object;
        r8 = r10.defineProperty;
        r7 = '__esModule';
        r6 = {'value': true};
        r6 = r8.bind(r10)(r9, r7, r6);
        r8 = r2.Object;
        r7 = r8.defineProperty;
        r6 = {'enumerable': true, 'get': null};
        r2 = function() { // Original name: get, environment: r3
            r0 = _closure0_slot12;
            return r0;
        };
        r6[1] = r2;
        r2 = 'default';
        r2 = r7.bind(r8)(r9, r2, r6);
        r2 = r4[r0];
        r1 = undefined;
        r2 = r5.bind(r1)(r2);
        var _closure0_slot0 = r2;
        r2 = r4[r1];
        r2 = r5.bind(r1)(r2);
        var _closure0_slot1 = r2;
        r2 = r4[r2];
        r2 = r5.bind(r1)(r2);
        var _closure0_slot2 = r2;
        r2 = r4[r3];
        r2 = r5.bind(r1)(r2);
        var _closure0_slot3 = r2;
        r6 = r4[r4];
        r6 = r5.bind(r1)(r6);
        var _closure0_slot4 = r6;
        r6 = r4[r5];
        r6 = r5.bind(r1)(r6);
        var _closure0_slot5 = r6;
        r6 = r4[r6];
        r7 = r5.bind(r1)(r6);
        var _closure0_slot6 = r7;
        r6 = r4[r7];
        r6 = r5.bind(r1)(r6);
        var _closure0_slot7 = r6;
        r6 = r4[r8];
        r6 = r5.bind(r1)(r6);
        var _closure0_slot8 = r6;
        r4 = r4[r9];
        r4 = r5.bind(r1)(r4);
        var _closure0_slot9 = r4;
        r4 = new Array(3);
        r5 = {'key': 'upcoming', 'label': 'Sáº¯p diá»…n ra'};
        r4[0] = r5;
        r5 = {'key': 'registered', 'label': 'ÄÃ£ Ä‘Äƒng kÃ½'};
        r4[1] = r5;
        r5 = {'key': 'past', 'label': 'ÄÃ£ qua'};
        r4[2] = r5;
        var _closure0_slot10 = r4;
        r4 = {'upcoming': null, 'registered': null, 'past': null};
        r5 = {'title': 'ChÆ°a cÃ³ sá»± kiá»‡n nÃ o sáº¯p diá»…n ra', 'hint': 'Khi nhÃ  trÆ°á»ng má»Ÿ sá»± kiá»‡n dÃ nh cho báº¡n, nÃ³ sáº½ hiá»‡n á»Ÿ Ä‘Ã¢y.'};
        r4[0] = r5;
        r5 = {'title': 'Báº¡n chÆ°a Ä‘Äƒng kÃ½ sá»± kiá»‡n nÃ o', 'hint': 'Má»Ÿ tab "Sáº¯p diá»…n ra" Ä‘á»ƒ xem nhá»¯ng sá»± kiá»‡n Ä‘ang má»Ÿ Ä‘Äƒng kÃ½.'};
        r4[1] = r5;
        r5 = {'title': 'ChÆ°a cÃ³ sá»± kiá»‡n nÃ o Ä‘Ã£ qua', 'hint': 'Nhá»¯ng sá»± kiá»‡n Ä‘Ã£ káº¿t thÃºc sáº½ Ä‘Æ°á»£c lÆ°u láº¡i á»Ÿ Ä‘Ã¢y.'};
        r4[2] = r5;
        var _closure0_slot11 = r4;
        r5 = r2.StyleSheet;
        r4 = r5.create;
        r2 = {'screen': null, 'tabs': null, 'tab': null, 'tabActive': null, 'tabPressed': null, 'tabText': null, 'tabTextActive': null, 'list': null, 'content': null, 'card': null, 'cardPressed': null, 'cover': null, 'cardBody': null, 'title': null, 'metaRow': null, 'meta': null, 'chips': null, 'chip': null, 'chipText': null, 'chip_success': null, 'chipText_success': null, 'chip_brand': null, 'chipText_brand': null, 'chip_warning': null, 'chipText_warning': null, 'chip_muted': null, 'chipText_muted': null};
        r6 = {'flex': 1, 'backgroundColor': null};
        r8 = r7.colors;
        r8 = r8.background;
        r6[1] = r8;
        r2[0] = r6;
        r6 = {'flexDirection': 'row', 'gap': null, 'paddingHorizontal': null, 'paddingTop': null, 'paddingBottom': null};
        r8 = r7.spacing;
        r8 = r8.sm;
        r6[1] = r8;
        r8 = r7.spacing;
        r8 = r8.marginPage;
        r6[2] = r8;
        r8 = r7.spacing;
        r8 = r8.md;
        r6[3] = r8;
        r8 = r7.spacing;
        r8 = r8.sm;
        r6[4] = r8;
        r2[1] = r6;
        r6 = {'flex': 1, 'paddingVertical': null, 'borderRadius': null, 'borderWidth': 1, 'borderColor': null, 'backgroundColor': null, 'alignItems': 'center'};
        r8 = r7.spacing;
        r8 = r8.sm;
        r6[1] = r8;
        r8 = r7.radius;
        r8 = r8.full;
        r6[2] = r8;
        r8 = r7.colors;
        r8 = r8.border;
        r6[4] = r8;
        r8 = r7.colors;
        r8 = r8.surface;
        r6[5] = r8;
        r2[2] = r6;
        r6 = {'backgroundColor': null, 'borderColor': null};
        r8 = r7.colors;
        r8 = r8.secondary;
        r6[0] = r8;
        r8 = r7.colors;
        r8 = r8.secondary;
        r6[1] = r8;
        r2[3] = r6;
        r6 = {'opacity': 0.7};
        r2[4] = r6;
        r6 = {};
        r8 = r7.type;
        r12 = r8.labelMd;
        r13 = r6;
        r8 = copyDataProperties(r14, r13);
        r8 = r7.colors;
        r8 = r8.tertiary;
        r6['color'] = r8;
        r2[5] = r6;
        r6 = {'color': null};
        r8 = r7.colors;
        r8 = r8.onSecondary;
        r6[0] = r8;
        r2[6] = r6;
        r6 = {'flex': 1};
        r2[7] = r6;
        r6 = {'padding': null, 'paddingTop': null, 'gap': null};
        r8 = r7.spacing;
        r8 = r8.marginPage;
        r6[0] = r8;
        r8 = r7.spacing;
        r8 = r8.sm;
        r6[1] = r8;
        r8 = r7.spacing;
        r8 = r8.md;
        r6[2] = r8;
        r2[8] = r6;
        r6 = {'backgroundColor': null, 'borderRadius': null, 'borderWidth': 1, 'borderColor': null, 'overflow': 'hidden'};
        r8 = r7.colors;
        r8 = r8.surface;
        r6[0] = r8;
        r8 = r7.radius;
        r8 = r8.lg;
        r6[1] = r8;
        r8 = r7.colors;
        r8 = r8.border;
        r6[3] = r8;
        r2[9] = r6;
        r6 = {'opacity': 0.7};
        r2[10] = r6;
        r6 = {'width': '100%', 'height': 132, 'backgroundColor': null};
        r8 = r7.colors;
        r8 = r8.surfaceLow;
        r6[2] = r8;
        r2[11] = r6;
        r6 = {'padding': null, 'gap': null};
        r8 = r7.spacing;
        r8 = r8.lg;
        r6[0] = r8;
        r8 = r7.spacing;
        r8 = r8.xs;
        r6[1] = r8;
        r2[12] = r6;
        r6 = {};
        r8 = r7.type;
        r12 = r8.headlineSm;
        r13 = r6;
        r8 = copyDataProperties(r14, r13);
        r8 = r7.colors;
        r8 = r8.text;
        r6['color'] = r8;
        r2[13] = r6;
        r6 = {'flexDirection': 'row', 'alignItems': 'center', 'gap': null};
        r8 = r7.spacing;
        r8 = r8.xs;
        r6[2] = r8;
        r2[14] = r6;
        r6 = {};
        r8 = r7.type;
        r12 = r8.bodyMd;
        r13 = r6;
        r8 = copyDataProperties(r14, r13);
        r8 = r7.colors;
        r8 = r8.tertiary;
        r6['color'] = r8;
        r0 = 1;
        r6['flex'] = r0;
        r2[15] = r6;
        r6 = {'flexDirection': 'row', 'flexWrap': 'wrap', 'gap': null, 'marginTop': null};
        r8 = r7.spacing;
        r8 = r8.xs;
        r6[2] = r8;
        r8 = r7.spacing;
        r8 = r8.xs;
        r6[3] = r8;
        r2[16] = r6;
        r6 = {'paddingHorizontal': null, 'paddingVertical': 3, 'borderRadius': null};
        r8 = r7.spacing;
        r8 = r8.sm;
        r6[0] = r8;
        r8 = r7.radius;
        r8 = r8.full;
        r6[2] = r8;
        r2[17] = r6;
        r6 = {};
        r8 = r7.type;
        r12 = r8.labelMd;
        r13 = r6;
        r8 = copyDataProperties(r14, r13);
        r2[18] = r6;
        r6 = {'backgroundColor': '#d5f2e0'};
        r2[19] = r6;
        r6 = {'color': '#137a45'};
        r2[20] = r6;
        r6 = {'backgroundColor': null};
        r8 = r7.colors;
        r8 = r8.primarySoft;
        r6[0] = r8;
        r2[21] = r6;
        r6 = {'color': null};
        r8 = r7.colors;
        r8 = r8.primaryDeep;
        r6[0] = r8;
        r2[22] = r6;
        r6 = {'backgroundColor': null};
        r8 = r7.colors;
        r8 = r8.dangerSoft;
        r6[0] = r8;
        r2[23] = r6;
        r6 = {'color': null};
        r8 = r7.colors;
        r8 = r8.danger;
        r6[0] = r8;
        r2[24] = r6;
        r6 = {'backgroundColor': null};
        r8 = r7.colors;
        r8 = r8.surfaceContainer;
        r6[0] = r8;
        r2[25] = r6;
        r6 = {'color': null};
        r7 = r7.colors;
        r7 = r7.tertiary;
        r6[0] = r7;
        r2[26] = r6;
        r2 = r4.bind(r5)(r2);
        var _closure0_slot15 = r2;
        return r1;
    };
    r9 = r11.bind(r5)(r9, r0, r10);
    r11 = r8.__d;
    r0 = 2039;
    r10 = [662, 50, 282, 1289, 1296, 1327, 1320, 1325, 2040, 1324, 1319, 228];
    r9 = function(a0, a1, a2, a3, a4, a5, a6) {
        r5 = a1;
        r9 = a5;
        r4 = a6;
        r2 = function() { // Original name: FeedbackScreen, environment: r3
            _fun10173: for(var _fun10173_ip = 0; ; ) switch(_fun10173_ip) {
case 0:
                r6 = _closure0_slot1;
                r8 = r6.useState;
                r1 = undefined;
                r7 = {};
                r8 = r8.bind(r1)(r7);
                r10 = r8;
                r7 = r10[Symbol.iterator];
                r10 = r7().next;
                r8 = r10;
                r8 = r8().value;
                r9 = r7;
                r2 = r9 === r1;
                r30 = undefined;
                if(r2) { _fun10173_ip = 49; continue _fun10173 }
case 46:
                r30 = r8;
case 49:
                var _closure1_slot0 = r30;
                r8 = undefined;
                if(r2) { _fun10173_ip = 86; continue _fun10173 }
case 61:
                r10 = r10().value;
                r11 = r7;
                r3 = r11 === r1;
                r8 = undefined;
                r2 = r3;
                if(r3) { _fun10173_ip = 86; continue _fun10173 }
case 80:
                r8 = r10;
                r2 = r3;
case 86:
                var _closure1_slot1 = r8;
                if(r2) { _fun10173_ip = 96; continue _fun10173 }
case 93:
                r7.return();
case 96:
                r8 = r6.useState;
                r7 = {};
                r8 = r8.bind(r1)(r7);
                r10 = r8;
                r7 = r10[Symbol.iterator];
                r10 = r7().next;
                r8 = r10;
                r8 = r8().value;
                r11 = r7;
                r2 = r11 === r1;
                r29 = undefined;
                if(r2) { _fun10173_ip = 136; continue _fun10173 }
case 133:
                r29 = r8;
case 136:
                r8 = undefined;
                if(r2) { _fun10173_ip = 166; continue _fun10173 }
case 141:
                r10 = r10().value;
                r11 = r7;
                r3 = r11 === r1;
                r8 = undefined;
                r2 = r3;
                if(r3) { _fun10173_ip = 166; continue _fun10173 }
case 160:
                r8 = r10;
                r2 = r3;
case 166:
                var _closure1_slot2 = r8;
                if(r2) { _fun10173_ip = 176; continue _fun10173 }
case 173:
                r7.return();
case 176:
                r7 = r6.useState;
                r2 = false;
                r8 = r7.bind(r1)(r2);
                r10 = r8;
                r7 = r10[Symbol.iterator];
                r10 = r7().next;
                r8 = r10;
                r8 = r8().value;
                r11 = r7;
                r3 = r11 === r1;
                r33 = undefined;
                if(r3) { _fun10173_ip = 216; continue _fun10173 }
case 213:
                r33 = r8;
case 216:
                r8 = undefined;
                if(r3) { _fun10173_ip = 246; continue _fun10173 }
case 221:
                r10 = r10().value;
                r11 = r7;
                r4 = r11 === r1;
                r8 = undefined;
                r3 = r4;
                if(r4) { _fun10173_ip = 246; continue _fun10173 }
case 240:
                r8 = r10;
                r3 = r4;
case 246:
                var _closure1_slot3 = r8;
                if(r3) { _fun10173_ip = 256; continue _fun10173 }
case 253:
                r7.return();
case 256:
                r7 = r6.useState;
                r8 = r7.bind(r1)(r2);
                r10 = r8;
                r7 = r10[Symbol.iterator];
                r10 = r7().next;
                r8 = r10;
                r8 = r8().value;
                r11 = r7;
                r2 = r11 === r1;
                r22 = undefined;
                if(r2) { _fun10173_ip = 294; continue _fun10173 }
case 291:
                r22 = r8;
case 294:
                r8 = undefined;
                if(r2) { _fun10173_ip = 324; continue _fun10173 }
case 299:
                r10 = r10().value;
                r11 = r7;
                r3 = r11 === r1;
                r8 = undefined;
                r2 = r3;
                if(r3) { _fun10173_ip = 324; continue _fun10173 }
case 318:
                r8 = r10;
                r2 = r3;
case 324:
                var _closure1_slot4 = r8;
                if(r2) { _fun10173_ip = 334; continue _fun10173 }
case 331:
                r7.return();
case 334:
                r7 = r6.useState;
                r0 = 0;
                r8 = r7.bind(r1)(r0);
                r10 = r8;
                r7 = r10[Symbol.iterator];
                r10 = r7().next;
                r8 = r10;
                r8 = r8().value;
                r11 = r7;
                r2 = r11 === r1;
                r11 = undefined;
                if(r2) { _fun10173_ip = 374; continue _fun10173 }
case 371:
                r11 = r8;
case 374:
                r8 = undefined;
                if(r2) { _fun10173_ip = 404; continue _fun10173 }
case 379:
                r10 = r10().value;
                r12 = r7;
                r3 = r12 === r1;
                r8 = undefined;
                r2 = r3;
                if(r3) { _fun10173_ip = 404; continue _fun10173 }
case 398:
                r8 = r10;
                r2 = r3;
case 404:
                var _closure1_slot5 = r8;
                if(r2) { _fun10173_ip = 414; continue _fun10173 }
case 411:
                r7.return();
case 414:
                r7 = _closure0_slot5;
                r10 = r7.useApiQuery;
                r12 = r6.useCallback;
                r8 = new Array(0);
                r7 = function() { // Environment: r5
                    r1 = _closure0_slot4;
                    r1 = r1.fetchFeedbackForm;
                    r0 = undefined;
                    r1 = r1.bind(r0)();
                    return r1;
                };
                r8 = r12.bind(r1)(r7, r8);
                r7 = new Array(1);
                r7[0] = r11;
                r10 = r10.bind(r1)(r8, r7);
                r8 = r6.useMemo;
                r7 = new Array(1);
                r7[0] = r30;
                r6 = function() { // Environment: r9
                    r1 = global;
                    r3 = r1.Object;
                    r2 = r3.values;
                    r1 = _closure1_slot0;
                    r3 = r2.bind(r3)(r1);
                    r2 = r3.some;
                    r0 = undefined;
                    r1 = function(a0) {
                        _fun14807: for(var _fun14807_ip = 0; ; ) switch(_fun14807_ip) {
case 0:
                            r3 = a0;
                            r0 = typeof r3 === 'boolean';
                            if(!(typeof r3 === 'boolean')) { _fun14807_ip = 33; continue _fun14807 }
case 16:
                            r2 = r3.trim;
                            r3 = r2.bind(r3)();
                            r2 = '';
                            r0 = r3 !== r2;
case 33:
                            return r0;
                        }
                    };
                    r1 = r2.bind(r3)(r1);
                    return r1;
                };
                r24 = r8.bind(r1)(r6, r7);
                r6 = r10.loading;
                if(r6) { _fun10173_ip = 1385; continue _fun10173 }
case 494:
                r6 = r10.error;
                if(r6) { _fun10173_ip = 1190; continue _fun10173 }
case 505:
                r31 = r10.data;
                var _closure1_slot6 = r31;
                r19 = _closure0_slot10;
                r8 = r19.jsxs;
                r7 = r19.Fragment;
                r12 = r19.jsx;
                r6 = _closure0_slot0;
                r6 = r6.Stack;
                r11 = r6.Screen;
                r6 = {'options': null};
                r13 = {'title': 'GÃ³p Ã½'};
                r6[0] = r13;
                r6 = r12.bind(r1)(r11, r6);
                r11 = new Array(2);
                r11[0] = r6;
                r14 = r19.jsx;
                r26 = _closure0_slot2;
                r13 = r26.KeyboardAvoidingView;
                r12 = {'style': null, 'behavior': undefined, 'children': null};
                r25 = _closure0_slot12;
                r6 = r25.container;
                r12[0] = r6;
                r17 = r19.jsxs;
                r16 = r26.ScrollView;
                r15 = {'contentContainerStyle': null, 'keyboardShouldPersistTaps': 'handled', 'children': null};
                r6 = r25.content;
                r15[0] = r6;
                r27 = r19.jsxs;
                r20 = _closure0_slot6;
                r21 = r20.Card;
                r28 = r19.jsx;
                r6 = _closure0_slot9;
                r23 = r6.Text;
                r18 = {'style': null, 'children': null};
                r32 = r25.title;
                r18[0] = r32;
                r32 = r31.title;
                r18[1] = r32;
                r18 = r28.bind(r1)(r23, r18);
                r28 = new Array(2);
                r28[0] = r18;
                r18 = r31.description;
                r32 = null;
                if(!r18) { _fun10173_ip = 771; continue _fun10173 }
case 729:
                r35 = r19.jsx;
                r34 = r6.Text;
                r18 = {'style': null, 'children': null};
                r36 = r25.desc;
                r18[0] = r36;
                r36 = r31.description;
                r18[1] = r36;
                r32 = r35.bind(r1)(r34, r18);
case 771:
                r18 = {'children': null};
                r28[1] = r32;
                r18[0] = r28;
                r21 = r27.bind(r1)(r21, r18);
                r18 = new Array(3);
                r18[0] = r21;
                r21 = null;
                if(!r22) { _fun10173_ip = 867; continue _fun10173 }
case 804:
                r28 = r19.jsx;
                r27 = r20.Card;
                r22 = {'children': null};
                r35 = r19.jsx;
                r34 = r6.Text;
                r32 = {'style': null, 'children': 'ÄÃ£ gá»­i gÃ³p Ã½. Cáº£m Æ¡n báº¡n Ä‘Ã£ dÃ nh thá»i gian â€” báº¡n cÃ³ thá»ƒ gá»­i tiáº¿p báº¥t cá»© lÃºc nÃ o.'};
                r36 = r25.thanks;
                r32[0] = r36;
                r32 = r35.bind(r1)(r34, r32);
                r22[0] = r32;
                r21 = r28.bind(r1)(r27, r22);
case 867:
                r18[1] = r21;
                r21 = r19.jsxs;
                r20 = r20.Card;
                r28 = r19.jsx;
                r22 = _closure0_slot7;
                r27 = r22.DynamicForm;
                r22 = {'fields': null, 'values': null, 'errors': null, 'onChange': null};
                r31 = r31.fields;
                r22[0] = r31;
                r22[1] = r30;
                r22[2] = r29;
                r29 = function(a0, a1) { // Original name: onChange, environment: r9
                    r4 = a0;
                    var _closure2_slot0 = r4;
                    r4 = a1;
                    var _closure2_slot1 = r4;
                    r4 = _closure1_slot1;
                    r0 = undefined;
                    r3 = function(a0) { // Environment: r3
                        r0 = {};
                        r3 = a0;
                        r4 = r0;
                        r2 = copyDataProperties(r5, r4);
                        r2 = _closure2_slot0;
                        r1 = _closure2_slot1;
                        r0[2] = r1;
                        return r0;
                    };
                    r3 = r4.bind(r0)(r3);
                    r2 = _closure1_slot4;
                    r1 = false;
                    r2 = r2.bind(r0)(r1);
                    return r0;
                };
                r22[3] = r29;
                r27 = r28.bind(r1)(r27, r22);
                r22 = new Array(3);
                r22[0] = r27;
                r28 = r19.jsx;
                r27 = r26.Pressable;
                r26 = r25.button;
                r30 = new Array(2);
                r30[0] = r26;
                r31 = r33;
                if(r33) { _fun10173_ip = 977; continue _fun10173 }
case 974:
                r31 = !r24;
case 977:
                if(!r31) { _fun10173_ip = 986; continue _fun10173 }
case 980:
                r31 = r25.buttonDisabled;
case 986:
                r29 = function() { // Original name: submit, environment: r9
                    r0 = undefined;
                    r1 = undefined;
                    r1 = arguments;
                    r4 = r1;
                    r3 = spawnAsync;
                    r2 = function() { // Original name: ?anon_0_submit, environment: r1
                        r0 = 0;
                        var _closure2_slot4 = r0;
                        var _closure2_slot5 = r0;
                        var _closure2_slot3 = r0;
                        r1 = function* () { // Original name: ?anon_0_submit, environment: r1
                            _fun15121: for(var _fun15121_ip = 0; ; ) switch(_fun15121_ip) {
case 0:
                                r0 = _closure2_slot5;
                                r2 = r0;
                                r4 = 2;
                                if(!(r0 !== r4)) { _fun15121_ip = 621; continue _fun15121 }
case 20:
                                r0 = arguments[1];
                                r3 = arguments[0];
                                r18 = r2;
                                r7 = 3;
                                r5 = 1;
                                r17 = 0;
                                r15 = true;
                                r14 = undefined;
                                r12 = false;
                                r11 = 'Vui lÃ²ng xem láº¡i dÃ²ng chá»¯ Ä‘á» dÆ°á»›i tá»«ng má»¥c rá»“i gá»­i láº¡i.';
                                r10 = 'CÃ²n vÃ i má»¥c chÆ°a há»£p lá»‡';
                                r9 = 'KhÃ´ng gá»­i Ä‘Æ°á»£c';
                                r8 = 'Vui lÃ²ng thá»­ láº¡i sau.';
                                if(!(r18 !== r7)) { _fun15121_ip = 591; continue _fun15121 }
case 73:
                                r2 = r4;
                                _closure2_slot5 = r4;
                                r18 = _closure2_slot4;
                                if(!(r17 !== r18)) { _fun15121_ip = 437; continue _fun15121 }
case 91:
                                if(!(r5 !== r18)) { _fun15121_ip = 411; continue _fun15121 }
case 98:
                                if(!(r4 !== r18)) { _fun15121_ip = 188; continue _fun15121 }
case 102:
                                if(!(r3 !== r5)) { _fun15121_ip = 179; continue _fun15121 }
case 106:
                                if(!(r3 !== r4)) { _fun15121_ip = 143; continue _fun15121 }
case 110:
                                r18 = _closure2_slot1;
                                r20 = _env_r18_slot1;
                                r19 = {};
                                r19 = r20.bind(r14)(r19);
                                r18 = _env_r18_slot4;
                                r18 = r18.bind(r14)(r15);
                                _closure2_slot3 = r5;
                                _fun15121_ip = 379; continue _fun15121;
case 143:
                                _closure2_slot3 = r17;
                                r18 = _closure2_slot1;
                                r18 = _env_r18_slot3;
                                r18 = r18.bind(r14)(r12);
                                r2 = r7;
                                _closure2_slot5 = r7;
                                r18 = {'value': null, 'done': true};
                                r18[0] = r0;
                                return r18;
case 179:
                                r2 = r7;
                                _closure2_slot5 = r7;
                                throw r0;
case 188:
                                r19 = _closure2_slot0;
                                r18 = _closure2_slot1;
                                r20 = _closure2_slot2;
                                r6 = r20;
                                _closure2_slot3 = r5;
                                _env_r19_slot0 = r20;
                                r19 = _env_r19_slot0;
                                r18 = _closure1_slot3;
                                r18 = r18.ApiError;
                                r18 = r19 instanceof r18;
                                if(!r18) { _fun15121_ip = 253; continue _fun15121 }
case 236:
                                r18 = _closure2_slot0;
                                r18 = _closure1_slot0;
                                r18 = r18.fieldErrors;
                                if(r18) { _fun15121_ip = 326; continue _fun15121 }
case 253:
                                r21 = _closure2_slot0;
                                r18 = _closure2_slot1;
                                r19 = _closure1_slot2;
                                r20 = r19.Alert;
                                r19 = r20.alert;
                                r21 = _env_r21_slot0;
                                r18 = _closure1_slot3;
                                r18 = r18.ApiError;
                                r21 = r21 instanceof r18;
                                r18 = r8;
                                if(!r21) { _fun15121_ip = 318; continue _fun15121 }
case 305:
                                r21 = _closure2_slot0;
                                r21 = _env_r21_slot0;
                                r18 = r21.message;
case 318:
                                r18 = r19.bind(r20)(r9, r18);
                                _fun15121_ip = 379; continue _fun15121;
case 326:
                                r19 = _closure2_slot0;
                                r18 = _closure2_slot1;
                                r20 = _closure1_slot2;
                                r19 = _env_r19_slot0;
                                r19 = r19.fieldErrors;
                                r19 = r20.bind(r14)(r19);
                                r18 = _closure1_slot2;
                                r19 = r18.Alert;
                                r18 = r19.alert;
                                r18 = r18.bind(r19)(r10, r11);
case 379:
                                _closure2_slot3 = r17;
                                r18 = _closure2_slot1;
                                r18 = _closure1_slot3;
                                r18 = r18.bind(r14)(r12);
                                r2 = r7;
                                _closure2_slot5 = r7;
                                r18 = {'value': undefined, 'done': true};
                                return r18;
case 411:
                                r19 = _closure2_slot1;
                                r18 = _closure2_slot2;
                                r6 = r18;
                                _closure2_slot3 = r17;
                                r19 = _env_r19_slot3;
                                r19 = r19.bind(r14)(r12);
                                throw r18;
case 437:
                                var _closure2_slot1 = r16;
                                var _closure2_slot0 = r18;
                                r18 = _closure1_slot3;
                                r18 = r18.bind(r14)(r15);
                                r19 = _closure1_slot2;
                                r18 = {};
                                r18 = r19.bind(r14)(r18);
                                _closure2_slot3 = r4;
                                r18 = _closure1_slot4;
                                r19 = r18.submitFeedback;
                                r18 = _closure1_slot7;
                                r21 = r18.withCheckboxDefaults;
                                r18 = _closure1_slot6;
                                r20 = r18.fields;
                                r18 = _closure1_slot0;
                                r18 = r21.bind(r14)(r20, r18);
                                r19 = r19.bind(r14)(r18);
                                _closure2_slot4 = r7;
                                r2 = r5;
                                _closure2_slot5 = r5;
                                r18 = {'value': null, 'done': false};
                                r18[0] = r19;
                                return r18;
case 543:
                                CatchBlockStart(arg_register=18);
                                r6 = r18;
                                var _closure2_slot2 = r18;
                                r18 = _closure2_slot3;
                                if(!(r17 !== r18)) { _fun15121_ip = 582; continue _fun15121 }
case 560:
                                if(!(r5 !== r18)) { _fun15121_ip = 573; continue _fun15121 }
case 564:
                                _closure2_slot4 = r4;
                                _fun15121_ip = 73; continue _fun15121;
case 573:
                                _closure2_slot4 = r5;
                                _fun15121_ip = 73; continue _fun15121;
case 582:
                                r2 = r7;
                                _closure2_slot5 = r7;
                                throw r6;
case 591:
                                if(!(r3 !== r5)) { _fun15121_ip = 619; continue _fun15121 }
case 595:
                                if(!(r3 !== r4)) { _fun15121_ip = 607; continue _fun15121 }
case 599:
                                r3 = {'value': undefined, 'done': true};
                                return r3;
case 607:
                                r3 = {'value': null, 'done': true};
                                r3[0] = r0;
                                return r3;
case 619:
                                throw r0;
case 621:
                                r0 = 3;
                                r2 = r0;
                                _closure2_slot5 = r0;
                                r23 = 'Generator functions may not be called on executing generators';
                                r0 = throwTypeError(r24);
                            }
                        };
                        return r1;
                    };
                    r1 = this;
                    r1 = r3.bind(r0)(r2, r1, r4);
                    return r1;
                };
                r26 = {'style': null, 'onPress': null, 'disabled': null, 'children': null};
                r30[1] = r31;
                r26[0] = r30;
                r26[1] = r29;
                r29 = r33;
                if(r29) { _fun10173_ip = 1018; continue _fun10173 }
case 1015:
                r29 = !r24;
case 1018:
                r26[2] = r29;
                r31 = r19.jsx;
                r30 = r6.Text;
                r29 = {'style': null, 'children': null};
                r32 = r25.buttonText;
                r29[0] = r32;
                r32 = 'Gá»­i gÃ³p Ã½';
                if(!r33) { _fun10173_ip = 1059; continue _fun10173 }
case 1055:
                r32 = 'Äang gá»­iâ€¦';
case 1059:
                r29[1] = r32;
                r29 = r31.bind(r1)(r30, r29);
                r26[3] = r29;
                r26 = r28.bind(r1)(r27, r26);
                r22[1] = r26;
                r23 = null;
                if(r24) { _fun10173_ip = 1124; continue _fun10173 }
case 1088:
                r24 = r19.jsx;
                r19 = r6.Text;
                r6 = {'style': null, 'children': 'HÃ£y viáº¿t á»Ÿ Ã­t nháº¥t má»™t má»¥c báº¡n quan tÃ¢m.'};
                r25 = r25.hint;
                r6[0] = r25;
                r23 = r24.bind(r1)(r19, r6);
case 1124:
                r6 = {'children': null};
                r19 = {'children': null};
                r22[2] = r23;
                r19[0] = r22;
                r19 = r21.bind(r1)(r20, r19);
                r18[2] = r19;
                r15[2] = r18;
                r15 = r17.bind(r1)(r16, r15);
                r12[2] = r15;
                r12 = r14.bind(r1)(r13, r12);
                r11[1] = r12;
                r6[0] = r11;
                r6 = r8.bind(r1)(r7, r6);
                return r6;
case 1190:
                r6 = r10.error;
                r7 = r6.code;
                r6 = 'FEEDBACK_CLOSED';
                if(!(r7 !== r6)) { _fun10173_ip = 1264; continue _fun10173 }
case 1208:
                r6 = _closure0_slot10;
                r8 = r6.jsx;
                r6 = _closure0_slot8;
                r7 = r6.ErrorState;
                r6 = {'message': null, 'onRetry': null};
                r10 = r10.error;
                r10 = r10.message;
                r6[0] = r10;
                r9 = function() { // Original name: onRetry, environment: r9
                    r2 = _closure1_slot5;
                    r0 = undefined;
                    r1 = function(a0) {
                        r0 = 1;
                        r1 = a0;
                        r1 = r1 + r0;
                        return r1;
                    };
                    r1 = r2.bind(r0)(r1);
                    return r1;
                };
                r6[1] = r9;
                r6 = r8.bind(r1)(r7, r6);
                return r6;
case 1264:
                r10 = _closure0_slot10;
                r8 = r10.jsxs;
                r7 = r10.Fragment;
                r6 = {'children': null};
                r12 = r10.jsx;
                r9 = _closure0_slot0;
                r9 = r9.Stack;
                r11 = r9.Screen;
                r9 = {'options': null};
                r13 = {'title': 'GÃ³p Ã½'};
                r9[0] = r13;
                r11 = r12.bind(r1)(r11, r9);
                r9 = new Array(2);
                r9[0] = r11;
                r12 = r10.jsx;
                r10 = _closure0_slot8;
                r11 = r10.EmptyState;
                r10 = {'title': 'KÃªnh gÃ³p Ã½ Ä‘ang táº¡m Ä‘Ã³ng', 'hint': 'NhÃ  trÆ°á»ng sáº½ má»Ÿ láº¡i trong thá»i gian tá»›i.'};
                r10 = r12.bind(r1)(r11, r10);
                r9[1] = r10;
                r6[0] = r9;
                r6 = r8.bind(r1)(r7, r6);
                return r6;
case 1385:
                r6 = _closure0_slot10;
                r7 = r6.jsx;
                r5 = _closure0_slot8;
                r6 = r5.LoadingState;
                r5 = {};
                r5 = r7.bind(r1)(r6, r5);
                return r5;
            }
        };
        var _closure0_slot11 = r2;
        r2 = global;
        r10 = r2.Object;
        r8 = r10.defineProperty;
        r7 = '__esModule';
        r6 = {'value': true};
        r6 = r8.bind(r10)(r9, r7, r6);
        r8 = r2.Object;
        r7 = r8.defineProperty;
        r6 = {'enumerable': true, 'get': null};
        r2 = function() { // Original name: get, environment: r3
            r0 = _closure0_slot11;
            return r0;
        };
        r6[1] = r2;
        r2 = 'default';
        r2 = r7.bind(r8)(r9, r2, r6);
        r2 = r4[r0];
        r1 = undefined;
        r2 = r5.bind(r1)(r2);
        var _closure0_slot0 = r2;
        r2 = r4[r1];
        r2 = r5.bind(r1)(r2);
        var _closure0_slot1 = r2;
        r2 = r4[r2];
        r2 = r5.bind(r1)(r2);
        var _closure0_slot2 = r2;
        r6 = r4[r3];
        r6 = r5.bind(r1)(r6);
        var _closure0_slot3 = r6;
        r6 = r4[r4];
        r6 = r5.bind(r1)(r6);
        var _closure0_slot4 = r6;
        r6 = r4[r5];
        r6 = r5.bind(r1)(r6);
        var _closure0_slot5 = r6;
        r6 = r4[r6];
        r7 = r5.bind(r1)(r6);
        r6 = r4[r7];
        r6 = r5.bind(r1)(r6);
        var _closure0_slot6 = r6;
        r6 = r4[r8];
        r6 = r5.bind(r1)(r6);
        var _closure0_slot7 = r6;
        r6 = r4[r9];
        r6 = r5.bind(r1)(r6);
        var _closure0_slot8 = r6;
        r6 = r4[r10];
        r6 = r5.bind(r1)(r6);
        var _closure0_slot9 = r6;
        r4 = r4[r11];
        r4 = r5.bind(r1)(r4);
        var _closure0_slot10 = r4;
        r5 = r2.StyleSheet;
        r4 = r5.create;
        r2 = {'container': null, 'content': null, 'title': null, 'desc': null, 'thanks': null, 'button': null, 'buttonDisabled': null, 'buttonText': null, 'hint': null};
        r6 = {'flex': 1, 'backgroundColor': null};
        r8 = r7.colors;
        r8 = r8.background;
        r6[1] = r8;
        r2[0] = r6;
        r6 = {'padding': null, 'gap': null, 'paddingBottom': null};
        r8 = r7.spacing;
        r8 = r8.lg;
        r6[0] = r8;
        r8 = r7.spacing;
        r8 = r8.md;
        r6[1] = r8;
        r8 = r7.spacing;
        r8 = r8.xl;
        r0 = 2;
        r0 = r8 * r0;
        r6[2] = r0;
        r2[1] = r6;
        r6 = {'fontSize': 17, 'fontWeight': '700', 'color': null};
        r8 = r7.colors;
        r8 = r8.text;
        r6[2] = r8;
        r2[2] = r6;
        r6 = {'fontSize': 14, 'color': null, 'lineHeight': 20};
        r8 = r7.colors;
        r8 = r8.textMuted;
        r6[1] = r8;
        r2[3] = r6;
        r6 = {'fontSize': 14, 'color': null, 'fontWeight': '600', 'lineHeight': 20};
        r8 = r7.colors;
        r8 = r8.success;
        r6[1] = r8;
        r2[4] = r6;
        r6 = {'backgroundColor': null, 'borderRadius': null, 'paddingVertical': null, 'alignItems': 'center', 'marginTop': null};
        r8 = r7.colors;
        r8 = r8.primary;
        r6[0] = r8;
        r8 = r7.radius;
        r8 = r8.sm;
        r6[1] = r8;
        r8 = r7.spacing;
        r8 = r8.md;
        r6[2] = r8;
        r8 = r7.spacing;
        r8 = r8.md;
        r6[4] = r8;
        r2[5] = r6;
        r6 = {'opacity': 0.5};
        r2[6] = r6;
        r6 = {'color': '#fff', 'fontWeight': '700', 'fontSize': 15};
        r2[7] = r6;
        r6 = {'fontSize': 13, 'color': null, 'textAlign': 'center', 'marginTop': null};
        r8 = r7.colors;
        r8 = r8.tertiary;
        r6[1] = r8;
        r7 = r7.spacing;
        r7 = r7.sm;
        r6[3] = r7;
        r2[8] = r6;
        r2 = r4.bind(r5)(r2);
        var _closure0_slot12 = r2;
        return r1;
    };
    r9 = r11.bind(r5)(r9, r0, r10);
    r11 = r8.__d;
    r0 = 2040;
    r10 = [1297, 1342, 50, 282, 1319, 1289, 1296, 1320, 228];
    r9 = function(a0, a1, a2, a3, a4, a5, a6) {
        _fun2042: for(var _fun2042_ip = 0; ; ) switch(_fun2042_ip) {
case 0:
            r4 = a1;
            r5 = a5;
            r3 = a6;
            r1 = function(a0) { // Original name: FieldInput, environment: r2
                _fun10177: for(var _fun10177_ip = 0; ; ) switch(_fun10177_ip) {
case 0:
                    r4 = a0;
                    r3 = r4.field;
                    r8 = r4.value;
                    var _closure1_slot0 = r8;
                    r7 = r4.onChange;
                    var _closure1_slot1 = r7;
                    r13 = r4.hasError;
                    r1 = undefined;
                    var _closure1_slot2 = r1;
                    r10 = _closure0_slot12;
                    r4 = r10.input;
                    r11 = new Array(2);
                    r11[0] = r4;
                    r4 = r13;
                    if(!r4) { _fun10177_ip = 76; continue _fun10177 }
case 70:
                    r4 = r10.inputError;
case 76:
                    r11[1] = r4;
                    r5 = r3.type;
                    r4 = 'textarea';
                    if(!(r4 !== r5)) { _fun10177_ip = 950; continue _fun10177 }
case 96:
                    r4 = 'number';
                    if(!(r4 !== r5)) { _fun10177_ip = 848; continue _fun10177 }
case 107:
                    r4 = 'date';
                    if(!(r4 !== r5)) { _fun10177_ip = 771; continue _fun10177 }
case 118:
                    r4 = 'checkbox';
                    if(!(r4 !== r5)) { _fun10177_ip = 590; continue _fun10177 }
case 129:
                    r4 = 'select';
                    if(!(r4 !== r5)) { _fun10177_ip = 498; continue _fun10177 }
case 140:
                    r4 = 'radio';
                    if(!(r4 !== r5)) { _fun10177_ip = 498; continue _fun10177 }
case 151:
                    r4 = 'multiselect';
                    if(!(r4 !== r5)) { _fun10177_ip = 407; continue _fun10177 }
case 162:
                    r4 = 'scale';
                    if(!(r4 !== r5)) { _fun10177_ip = 297; continue _fun10177 }
case 173:
                    r4 = 'file';
                    if(!(r4 !== r5)) { _fun10177_ip = 258; continue _fun10177 }
case 181:
                    r4 = _closure0_slot8;
                    r12 = r4.jsx;
                    r4 = _closure0_slot4;
                    r5 = r4.TextInput;
                    r4 = {'style': null, 'value': null, 'onChangeText': null, 'placeholder': 'Nháº­p ná»™i dungâ€¦', 'placeholderTextColor': null};
                    r4[0] = r11;
                    r2 = null;
                    r14 = r8;
                    if(!(r8 == r2)) { _fun10177_ip = 223; continue _fun10177 }
case 219:
                    r14 = '';
case 223:
                    r4[1] = r14;
                    r4[2] = r7;
                    r14 = _closure0_slot7;
                    r14 = r14.colors;
                    r14 = r14.textMuted;
                    r4[4] = r14;
                    r4 = r12.bind(r1)(r5, r4);
                    return r4;
case 258:
                    r4 = _closure0_slot8;
                    r12 = r4.jsx;
                    r5 = _closure0_slot10;
                    r4 = {'value': null, 'onChange': null, 'hasError': null};
                    r4[0] = r8;
                    r4[1] = r7;
                    r4[2] = r13;
                    r4 = r12.bind(r1)(r5, r4);
                    return r4;
case 297:
                    r13 = r3.max;
                    r2 = null;
                    if(!(r13 == r2)) { _fun10177_ip = 311; continue _fun10177 }
case 308:
                    r13 = 5;
case 311:
                    r4 = _closure0_slot8;
                    r12 = r4.jsx;
                    r4 = _closure0_slot3;
                    r5 = r4.View;
                    r4 = {'style': null, 'children': null};
                    r14 = r10.scaleRow;
                    r4[0] = r14;
                    r14 = global;
                    r16 = r14.Array;
                    r15 = r16.from;
                    r14 = {'length': null};
                    r14[0] = r13;
                    r13 = function(a0, a1) {
                        r0 = 1;
                        r1 = a1;
                        r1 = r1 + r0;
                        return r1;
                    };
                    r15 = r15.bind(r16)(r14, r13);
                    r14 = r15.map;
                    r13 = function(a0) { // Environment: r9
                        _fun13402: for(var _fun13402_ip = 0; ; ) switch(_fun13402_ip) {
case 0:
                            r4 = a0;
                            var _closure2_slot0 = r4;
                            r7 = _closure0_slot8;
                            r3 = r7.jsx;
                            r1 = _closure0_slot3;
                            r2 = r1.Pressable;
                            r5 = _closure0_slot12;
                            r1 = r5.scaleItem;
                            r10 = new Array(2);
                            r10[0] = r1;
                            r1 = _closure1_slot0;
                            r9 = r1 === r4;
                            r11 = r9;
                            if(!r9) { _fun13402_ip = 72; continue _fun13402 }
case 66:
                            r11 = r5.scaleItemActive;
case 72:
                            r1 = {'style': null, 'onPress': null, 'children': null};
                            r10[1] = r11;
                            r1[0] = r10;
                            r8 = function() { // Original name: onPress, environment: r8
                                r2 = _closure1_slot1;
                                r1 = _closure2_slot0;
                                r0 = undefined;
                                r1 = r2.bind(r0)(r1);
                                return r1;
                            };
                            r1[1] = r8;
                            r7 = r7.jsx;
                            r6 = _closure0_slot4;
                            r6 = r6.Text;
                            r10 = r5.scaleText;
                            r8 = new Array(2);
                            r8[0] = r10;
                            if(!r9) { _fun13402_ip = 132; continue _fun13402 }
case 126:
                            r9 = r5.scaleTextActive;
case 132:
                            r5 = {'style': null, 'children': null};
                            r8[1] = r9;
                            r5[0] = r8;
                            r5[1] = r4;
                            r0 = undefined;
                            r5 = r7.bind(r0)(r6, r5);
                            r1[2] = r5;
                            r1 = r3.bind(r0)(r2, r1, r4);
                            return r1;
                        }
                    };
                    r13 = r14.bind(r15)(r13);
                    r4[1] = r13;
                    r4 = r12.bind(r1)(r5, r4);
                    return r4;
case 407:
                    r4 = global;
                    r5 = r4.Array;
                    r4 = r5.isArray;
                    r4 = r4.bind(r5)(r8);
                    r13 = r8;
                    if(r4) { _fun10177_ip = 435; continue _fun10177 }
case 431:
                    r13 = new Array(0);
case 435:
                    _closure1_slot2 = r13;
                    r4 = _closure0_slot8;
                    r12 = r4.jsx;
                    r5 = _closure0_slot11;
                    r14 = r3.options;
                    r2 = null;
                    if(!(r14 == r2)) { _fun10177_ip = 467; continue _fun10177 }
case 463:
                    r14 = new Array(0);
case 467:
                    r4 = {'options': null, 'selected': null, 'onPress': null};
                    r4[0] = r14;
                    r4[1] = r13;
                    r13 = function(a0) { // Original name: onPress, environment: r9
                        _fun13400: for(var _fun13400_ip = 0; ; ) switch(_fun13400_ip) {
case 0:
                            r5 = a0;
                            var _closure2_slot0 = r5;
                            r3 = _closure1_slot1;
                            r6 = _closure1_slot2;
                            r2 = r6.includes;
                            r2 = r2.bind(r6)(r5);
                            if(r2) { _fun13400_ip = 60; continue _fun13400 }
case 37:
                            r2 = new Array(1);
                            r7 = 0;
                            r9 = r2;
                            r8 = r6;
                            r0 = arraySpread(r10, r9, r8);
                            r2[0] = r5;
                            _fun13400_ip = 75; continue _fun13400;
case 60:
                            r5 = r6.filter;
                            r4 = function(a0) { // Environment: r4
                                r2 = _closure2_slot0;
                                r1 = a0;
                                r0 = r1 !== r2;
                                return r0;
                            };
                            r2 = r5.bind(r6)(r4);
case 75:
                            r1 = undefined;
                            r2 = r3.bind(r1)(r2);
                            return r2;
                        }
                    };
                    r4[2] = r13;
                    r4 = r12.bind(r1)(r5, r4);
                    return r4;
case 498:
                    r4 = _closure0_slot8;
                    r5 = r4.jsx;
                    r4 = _closure0_slot11;
                    r12 = r3.options;
                    r2 = null;
                    if(!(r12 == r2)) { _fun10177_ip = 526; continue _fun10177 }
case 522:
                    r12 = new Array(0);
case 526:
                    r3 = {'options': null, 'selected': null, 'onPress': null};
                    r3[0] = r12;
                    if(r8) { _fun10177_ip = 545; continue _fun10177 }
case 539:
                    r12 = new Array(0);
                    _fun10177_ip = 569; continue _fun10177;
case 545:
                    r13 = global;
                    r13 = r13.String;
                    r14 = r13.bind(r1)(r8);
                    r13 = new Array(1);
                    r13[0] = r14;
                    r12 = r13;
case 569:
                    r3[1] = r12;
                    r12 = function(a0) { // Original name: onPress, environment: r9
                        _fun13399: for(var _fun13399_ip = 0; ; ) switch(_fun13399_ip) {
case 0:
                            r3 = a0;
                            r2 = _closure1_slot1;
                            r4 = _closure1_slot0;
                            r1 = null;
                            if(!(r3 !== r4)) { _fun13399_ip = 23; continue _fun13399 }
case 20:
                            r1 = r3;
case 23:
                            r0 = undefined;
                            r1 = r2.bind(r0)(r1);
                            return r1;
                        }
                    };
                    r3[2] = r12;
                    r3 = r5.bind(r1)(r4, r3);
                    return r3;
case 590:
                    r13 = _closure0_slot8;
                    r5 = r13.jsxs;
                    r12 = _closure0_slot3;
                    r4 = r12.View;
                    r3 = {'style': null, 'children': null};
                    r14 = r10.switchRow;
                    r3[0] = r14;
                    r15 = r13.jsx;
                    r14 = r12.Switch;
                    r12 = {'value': null, 'onValueChange': null, 'trackColor': null};
                    r16 = global;
                    r16 = r16.Boolean;
                    r16 = r16.bind(r1)(r8);
                    r12[0] = r16;
                    r12[1] = r7;
                    r16 = {'true': null};
                    r17 = _closure0_slot7;
                    r17 = r17.colors;
                    r17 = r17.primary;
                    r16[0] = r17;
                    r12[2] = r16;
                    r14 = r15.bind(r1)(r14, r12);
                    r12 = new Array(2);
                    r12[0] = r14;
                    r15 = r13.jsx;
                    r13 = _closure0_slot4;
                    r14 = r13.Text;
                    r13 = {'style': null, 'children': null};
                    r16 = r10.switchLabel;
                    r13[0] = r16;
                    r16 = 'KhÃ´ng';
                    if(!r8) { _fun10177_ip = 745; continue _fun10177 }
case 741:
                    r16 = 'CÃ³';
case 745:
                    r13[1] = r16;
                    r13 = r15.bind(r1)(r14, r13);
                    r12[1] = r13;
                    r3[1] = r12;
                    r3 = r5.bind(r1)(r4, r3);
                    return r3;
case 771:
                    r3 = _closure0_slot8;
                    r5 = r3.jsx;
                    r3 = _closure0_slot4;
                    r4 = r3.TextInput;
                    r3 = {'style': null, 'value': null, 'onChangeText': null, 'placeholder': 'YYYY-MM-DD', 'placeholderTextColor': null};
                    r3[0] = r11;
                    r2 = null;
                    r12 = r8;
                    if(!(r8 == r2)) { _fun10177_ip = 813; continue _fun10177 }
case 809:
                    r12 = '';
case 813:
                    r3[1] = r12;
                    r3[2] = r7;
                    r12 = _closure0_slot7;
                    r12 = r12.colors;
                    r12 = r12.textMuted;
                    r3[4] = r12;
                    r3 = r5.bind(r1)(r4, r3);
                    return r3;
case 848:
                    r3 = _closure0_slot8;
                    r5 = r3.jsx;
                    r3 = _closure0_slot4;
                    r4 = r3.TextInput;
                    r3 = {'style': null, 'value': null, 'onChangeText': null, 'keyboardType': 'numeric', 'placeholder': '0', 'placeholderTextColor': null};
                    r3[0] = r11;
                    r13 = '';
                    r12 = r13;
                    if(!(r8 !== r1)) { _fun10177_ip = 910; continue _fun10177 }
case 888:
                    r2 = null;
                    r12 = r13;
                    if(!(r8 !== r2)) { _fun10177_ip = 910; continue _fun10177 }
case 897:
                    r13 = global;
                    r13 = r13.String;
                    r12 = r13.bind(r1)(r8);
case 910:
                    r3[1] = r12;
                    r9 = function(a0) { // Original name: onChangeText, environment: r9
                        r5 = a0;
                        r2 = _closure1_slot1;
                        r4 = r5.replace;
                        r3 = '';
                        r1 = /[^0-9.]/g;
                        r1 = r4.bind(r5)(r1, r3);
                        r0 = undefined;
                        r1 = r2.bind(r0)(r1);
                        return r1;
                    };
                    r3[2] = r9;
                    r9 = _closure0_slot7;
                    r9 = r9.colors;
                    r9 = r9.textMuted;
                    r3[5] = r9;
                    r3 = r5.bind(r1)(r4, r3);
                    return r3;
case 950:
                    r3 = _closure0_slot8;
                    r5 = r3.jsx;
                    r3 = _closure0_slot4;
                    r4 = r3.TextInput;
                    r3 = {'style': null, 'value': null, 'onChangeText': null, 'multiline': true, 'numberOfLines': 4, 'textAlignVertical': 'top', 'placeholder': 'Nháº­p ná»™i dungâ€¦', 'placeholderTextColor': null};
                    r9 = new Array(1);
                    r18 = 0;
                    r20 = r9;
                    r19 = r11;
                    r0 = arraySpread(r21, r20, r19);
                    r10 = r10.textarea;
                    r9[0] = r10;
                    r3[0] = r9;
                    r2 = null;
                    if(!(r8 == r2)) { _fun10177_ip = 1020; continue _fun10177 }
case 1016:
                    r8 = '';
case 1020:
                    r3[1] = r8;
                    r3[2] = r7;
                    r6 = _closure0_slot7;
                    r6 = r6.colors;
                    r6 = r6.textMuted;
                    r3[7] = r6;
                    r3 = r5.bind(r1)(r4, r3);
                    return r3;
                }
            };
            var _closure0_slot9 = r1;
            r1 = function(a0) { // Original name: FileInput, environment: r2
                _fun10178: for(var _fun10178_ip = 0; ; ) switch(_fun10178_ip) {
case 0:
                    r4 = a0;
                    r22 = r4.value;
                    r5 = r4.onChange;
                    var _closure1_slot0 = r5;
                    r19 = r4.hasError;
                    r1 = undefined;
                    var _closure1_slot1 = r1;
                    var _closure1_slot2 = r1;
                    var _closure1_slot3 = r1;
                    var _closure1_slot4 = r1;
                    var _closure1_slot5 = r1;
                    var _closure1_slot6 = r1;
                    var _closure1_slot7 = r1;
                    r4 = _closure0_slot2;
                    r5 = r4.useState;
                    r2 = false;
                    r6 = r5.bind(r1)(r2);
                    r8 = r6;
                    r5 = r8[Symbol.iterator];
                    r8 = r5().next;
                    r6 = r8;
                    r6 = r6().value;
                    r10 = r5;
                    r2 = r10 === r1;
                    r11 = undefined;
                    if(r2) { _fun10178_ip = 104; continue _fun10178 }
case 101:
                    r11 = r6;
case 104:
                    r6 = undefined;
                    if(r2) { _fun10178_ip = 134; continue _fun10178 }
case 109:
                    r8 = r8().value;
                    r10 = r5;
                    r0 = r10 === r1;
                    r6 = undefined;
                    r2 = r0;
                    if(r0) { _fun10178_ip = 134; continue _fun10178 }
case 128:
                    r6 = r8;
                    r2 = r0;
case 134:
                    _closure1_slot1 = r6;
                    if(r2) { _fun10178_ip = 144; continue _fun10178 }
case 141:
                    r5.return();
case 144:
                    r5 = r4.useState;
                    r2 = null;
                    r6 = r5.bind(r1)(r2);
                    r8 = r6;
                    r5 = r8[Symbol.iterator];
                    r8 = r5().next;
                    r6 = r8;
                    r6 = r6().value;
                    r10 = r5;
                    r0 = r10 === r1;
                    r17 = undefined;
                    if(r0) { _fun10178_ip = 184; continue _fun10178 }
case 181:
                    r17 = r6;
case 184:
                    r6 = undefined;
                    if(r0) { _fun10178_ip = 214; continue _fun10178 }
case 189:
                    r8 = r8().value;
                    r10 = r5;
                    r3 = r10 === r1;
                    r6 = undefined;
                    r0 = r3;
                    if(r3) { _fun10178_ip = 214; continue _fun10178 }
case 208:
                    r6 = r8;
                    r0 = r3;
case 214:
                    _closure1_slot2 = r6;
                    if(r0) { _fun10178_ip = 224; continue _fun10178 }
case 221:
                    r5.return();
case 224:
                    r4 = r4.useState;
                    r5 = r4.bind(r1)(r2);
                    r6 = r5;
                    r4 = r6[Symbol.iterator];
                    r6 = r4().next;
                    r5 = r6;
                    r5 = r5().value;
                    r8 = r4;
                    r0 = r8 === r1;
                    r12 = undefined;
                    if(r0) { _fun10178_ip = 262; continue _fun10178 }
case 259:
                    r12 = r5;
case 262:
                    r5 = undefined;
                    if(r0) { _fun10178_ip = 292; continue _fun10178 }
case 267:
                    r6 = r6().value;
                    r8 = r4;
                    r3 = r8 === r1;
                    r5 = undefined;
                    r0 = r3;
                    if(r3) { _fun10178_ip = 292; continue _fun10178 }
case 286:
                    r5 = r6;
                    r0 = r3;
case 292:
                    _closure1_slot3 = r5;
                    if(r0) { _fun10178_ip = 302; continue _fun10178 }
case 299:
                    r4.return();
case 302:
                    r4 = function(a0, a1) { // Original name: guiLen, environment: r7
                        r0 = undefined;
                        r2 = undefined;
                        r2 = arguments;
                        r4 = r2;
                        r3 = spawnAsync;
                        r2 = function(a0, a1) { // Original name: ?anon_0_guiLen, environment: r2
                            r2 = a0;
                            var _closure2_slot0 = r2;
                            r2 = a1;
                            var _closure2_slot1 = r2;
                            r0 = 0;
                            var _closure2_slot6 = r0;
                            var _closure2_slot7 = r0;
                            var _closure2_slot5 = r0;
                            r1 = function* (a0, a1) { // Original name: ?anon_0_guiLen, environment: r1
                                _fun15122: for(var _fun15122_ip = 0; ; ) switch(_fun15122_ip) {
case 0:
                                    r0 = _closure2_slot7;
                                    r2 = r0;
                                    r4 = 2;
                                    if(!(r0 !== r4)) { _fun15122_ip = 525; continue _fun15122 }
case 20:
                                    r0 = a1;
                                    r3 = a0;
                                    r16 = r2;
                                    r7 = 3;
                                    r5 = 1;
                                    r15 = 0;
                                    r13 = undefined;
                                    r12 = true;
                                    r11 = null;
                                    r9 = false;
                                    r8 = 'KhÃ´ng táº£i Ä‘Æ°á»£c tá»‡p lÃªn, vui lÃ²ng thá»­ láº¡i.';
                                    if(!(r16 !== r7)) { _fun15122_ip = 495; continue _fun15122 }
case 63:
                                    r2 = r4;
                                    _closure2_slot7 = r4;
                                    r16 = _closure2_slot6;
                                    if(!(r15 !== r16)) { _fun15122_ip = 360; continue _fun15122 }
case 81:
                                    if(!(r5 !== r16)) { _fun15122_ip = 334; continue _fun15122 }
case 88:
                                    if(!(r4 !== r16)) { _fun15122_ip = 216; continue _fun15122 }
case 95:
                                    if(!(r3 !== r5)) { _fun15122_ip = 207; continue _fun15122 }
case 99:
                                    if(!(r3 !== r4)) { _fun15122_ip = 171; continue _fun15122 }
case 103:
                                    r16 = _closure2_slot2;
                                    r17 = _closure2_slot3;
                                    _env_r16_slot0 = r0;
                                    r19 = _env_r17_slot2;
                                    r18 = _env_r16_slot0;
                                    r18 = r18.data;
                                    r18 = r18.original_name;
                                    r18 = r19.bind(r13)(r18);
                                    r17 = _env_r17_slot0;
                                    r16 = _env_r16_slot0;
                                    r16 = r16.data;
                                    r16 = r16.path;
                                    r16 = r17.bind(r13)(r16);
                                    _closure2_slot5 = r5;
                                    _fun15122_ip = 302; continue _fun15122;
case 171:
                                    _closure2_slot5 = r15;
                                    r16 = _closure2_slot3;
                                    r16 = _env_r16_slot1;
                                    r16 = r16.bind(r13)(r9);
                                    r2 = r7;
                                    _closure2_slot7 = r7;
                                    r16 = {'value': null, 'done': true};
                                    r16[0] = r0;
                                    return r16;
case 207:
                                    r2 = r7;
                                    _closure2_slot7 = r7;
                                    throw r0;
case 216:
                                    r17 = _closure2_slot2;
                                    r16 = _closure2_slot3;
                                    r18 = _closure2_slot4;
                                    r6 = r18;
                                    _closure2_slot5 = r5;
                                    _env_r17_slot1 = r18;
                                    r18 = _env_r16_slot3;
                                    r17 = _env_r17_slot1;
                                    r16 = _closure1_slot5;
                                    r16 = r16.ApiError;
                                    r16 = r17 instanceof r16;
                                    r17 = r8;
                                    if(!r16) { _fun15122_ip = 284; continue _fun15122 }
case 271:
                                    r16 = _closure2_slot2;
                                    r16 = _closure1_slot1;
                                    r17 = r16.message;
case 284:
                                    r16 = _closure2_slot3;
                                    r17 = r18.bind(r13)(r17);
                                    r16 = _closure1_slot0;
                                    r16 = r16.bind(r13)(r13);
case 302:
                                    _closure2_slot5 = r15;
                                    r16 = _closure2_slot3;
                                    r16 = _closure1_slot1;
                                    r16 = r16.bind(r13)(r9);
                                    r2 = r7;
                                    _closure2_slot7 = r7;
                                    r16 = {'value': undefined, 'done': true};
                                    return r16;
case 334:
                                    r17 = _closure2_slot3;
                                    r16 = _closure2_slot4;
                                    r6 = r16;
                                    _closure2_slot5 = r15;
                                    r17 = _env_r17_slot1;
                                    r17 = r17.bind(r13)(r9);
                                    throw r16;
case 360:
                                    var _closure2_slot3 = r14;
                                    var _closure2_slot2 = r16;
                                    r18 = _closure2_slot0;
                                    r17 = _closure2_slot1;
                                    var _closure3_slot0 = r13;
                                    r16 = _closure1_slot1;
                                    r16 = r16.bind(r13)(r12);
                                    r16 = _closure1_slot3;
                                    r16 = r16.bind(r13)(r11);
                                    _closure2_slot5 = r4;
                                    r16 = _closure1_slot6;
                                    r16 = r16.uploadFormFile;
                                    r17 = r16.bind(r13)(r18, r17);
                                    _closure2_slot6 = r7;
                                    r2 = r5;
                                    _closure2_slot7 = r5;
                                    r16 = {'value': null, 'done': false};
                                    r16[0] = r17;
                                    return r16;
case 447:
                                    CatchBlockStart(arg_register=16);
                                    r6 = r16;
                                    var _closure2_slot4 = r16;
                                    r16 = _closure2_slot5;
                                    if(!(r15 !== r16)) { _fun15122_ip = 486; continue _fun15122 }
case 464:
                                    if(!(r5 !== r16)) { _fun15122_ip = 477; continue _fun15122 }
case 468:
                                    _closure2_slot6 = r4;
                                    _fun15122_ip = 63; continue _fun15122;
case 477:
                                    _closure2_slot6 = r5;
                                    _fun15122_ip = 63; continue _fun15122;
case 486:
                                    r2 = r7;
                                    _closure2_slot7 = r7;
                                    throw r6;
case 495:
                                    if(!(r3 !== r5)) { _fun15122_ip = 523; continue _fun15122 }
case 499:
                                    if(!(r3 !== r4)) { _fun15122_ip = 511; continue _fun15122 }
case 503:
                                    r3 = {'value': undefined, 'done': true};
                                    return r3;
case 511:
                                    r3 = {'value': null, 'done': true};
                                    r3[0] = r0;
                                    return r3;
case 523:
                                    throw r0;
case 525:
                                    r0 = 3;
                                    r2 = r0;
                                    _closure2_slot7 = r0;
                                    r21 = 'Generator functions may not be called on executing generators';
                                    r0 = throwTypeError(r22);
                                }
                            };
                            return r1;
                        };
                        r1 = this;
                        r2 = r3.bind(r0)(r2, r1, r4);
                        return r2;
                    };
                    _closure1_slot4 = r4;
                    r4 = function() { // Original name: chupAnh, environment: r7
                        r0 = undefined;
                        r2 = undefined;
                        r2 = arguments;
                        r4 = r2;
                        r3 = spawnAsync;
                        r2 = function() { // Original name: ?anon_0_chupAnh, environment: r2
                            r0 = 0;
                            var _closure2_slot2 = r0;
                            var _closure2_slot3 = r0;
                            r1 = function* () { // Original name: ?anon_0_chupAnh, environment: r1
                                _fun15123: for(var _fun15123_ip = 0; ; ) switch(_fun15123_ip) {
case 0:
                                    r0 = _closure2_slot3;
                                    r2 = r0;
                                    r4 = 2;
                                    if(!(r0 !== r4)) { _fun15123_ip = 553; continue _fun15123 }
case 20:
                                    r0 = arguments[1];
                                    r3 = arguments[0];
                                    r5 = r2;
                                    r6 = 3;
                                    if(!(r5 !== r6)) { _fun15123_ip = 520; continue _fun15123 }
case 39:
                                    r2 = r4;
                                    _closure2_slot3 = r4;
                                    r7 = _closure2_slot2;
                                    r5 = 0;
                                    if(!(r5 !== r7)) { _fun15123_ip = 438; continue _fun15123 }
case 59:
                                    r5 = 1;
                                    if(!(r5 !== r7)) { _fun15123_ip = 281; continue _fun15123 }
case 69:
                                    if(!(r4 !== r7)) { _fun15123_ip = 124; continue _fun15123 }
case 73:
                                    if(!(r3 !== r5)) { _fun15123_ip = 115; continue _fun15123 }
case 77:
                                    if(!(r3 !== r4)) { _fun15123_ip = 96; continue _fun15123 }
case 81:
                                    r2 = r6;
                                    _closure2_slot3 = r6;
                                    r7 = {'value': undefined, 'done': true};
                                    return r7;
case 96:
                                    r2 = r6;
                                    _closure2_slot3 = r6;
                                    r7 = {'value': null, 'done': true};
                                    r7[0] = r0;
                                    return r7;
case 115:
                                    r2 = r6;
                                    _closure2_slot3 = r6;
                                    throw r0;
case 124:
                                    if(!(r3 !== r5)) { _fun15123_ip = 272; continue _fun15123 }
case 131:
                                    if(!(r3 !== r4)) { _fun15123_ip = 253; continue _fun15123 }
case 135:
                                    r7 = _closure2_slot0;
                                    _env_r7_slot1 = r0;
                                    r7 = _env_r7_slot1;
                                    r7 = r7.canceled;
                                    if(r7) { _fun15123_ip = 238; continue _fun15123 }
case 156:
                                    r7 = _closure2_slot0;
                                    r7 = _env_r7_slot1;
                                    r7 = r7.assets;
                                    r7 = r7[r0];
                                    if(!r7) { _fun15123_ip = 238; continue _fun15123 }
case 177:
                                    r7 = _closure2_slot0;
                                    r8 = _closure2_slot1;
                                    r9 = _env_r8_slot4;
                                    r7 = _env_r7_slot1;
                                    r7 = r7.assets;
                                    r7 = r7[r0];
                                    r8 = r7.uri;
                                    r7 = undefined;
                                    r8 = r9.bind(r7)(r8);
                                    _closure2_slot2 = r6;
                                    r2 = r5;
                                    _closure2_slot3 = r5;
                                    r7 = {'value': null, 'done': false};
                                    r7[0] = r8;
                                    return r7;
case 238:
                                    r2 = r6;
                                    _closure2_slot3 = r6;
                                    r7 = {'value': undefined, 'done': true};
                                    return r7;
case 253:
                                    r2 = r6;
                                    _closure2_slot3 = r6;
                                    r7 = {'value': null, 'done': true};
                                    r7[0] = r0;
                                    return r7;
case 272:
                                    r2 = r6;
                                    _closure2_slot3 = r6;
                                    throw r0;
case 281:
                                    if(!(r3 !== r5)) { _fun15123_ip = 429; continue _fun15123 }
case 288:
                                    if(!(r3 !== r4)) { _fun15123_ip = 410; continue _fun15123 }
case 292:
                                    r7 = _closure2_slot0;
                                    _env_r7_slot0 = r0;
                                    r7 = _env_r7_slot0;
                                    r8 = r7.granted;
                                    r7 = _closure2_slot1;
                                    if(r8) { _fun15123_ip = 366; continue _fun15123 }
case 321:
                                    r8 = _closure1_slot3;
                                    r11 = r8.Alert;
                                    r10 = r11.alert;
                                    r9 = 'HÃ£y cho phÃ©p á»©ng dá»¥ng dÃ¹ng mÃ¡y áº£nh trong CÃ i Ä‘áº·t mÃ¡y.';
                                    r8 = 'ChÆ°a Ä‘Æ°á»£c cáº¥p quyá»n';
                                    r8 = r10.bind(r11)(r8, r9);
                                    r2 = r6;
                                    _closure2_slot3 = r6;
                                    r8 = {'value': undefined, 'done': true};
                                    return r8;
case 366:
                                    r9 = _closure1_slot1;
                                    r8 = r9.launchCameraAsync;
                                    r7 = {'quality': 0.8};
                                    r7 = r8.bind(r9)(r7);
                                    _closure2_slot2 = r4;
                                    r2 = r5;
                                    _closure2_slot3 = r5;
                                    r5 = {'value': null, 'done': false};
                                    r5[0] = r7;
                                    return r5;
case 410:
                                    r2 = r6;
                                    _closure2_slot3 = r6;
                                    r5 = {'value': null, 'done': true};
                                    r5[0] = r0;
                                    return r5;
case 429:
                                    r2 = r6;
                                    _closure2_slot3 = r6;
                                    throw r0;
case 438:
                                    var _closure2_slot1 = r5;
                                    var _closure2_slot0 = r8;
                                    r7 = undefined;
                                    var _closure3_slot0 = r7;
                                    var _closure3_slot1 = r7;
                                    r7 = _closure1_slot1;
                                    r5 = r7.requestCameraPermissionsAsync;
                                    r7 = r5.bind(r7)();
                                    r5 = 1;
                                    _closure2_slot2 = r5;
                                    r2 = r5;
                                    _closure2_slot3 = r5;
                                    r5 = {'value': null, 'done': false};
                                    r5[0] = r7;
                                    return r5;
case 509:
                                    CatchBlockStart(arg_register=5);
                                    r2 = r6;
                                    _closure2_slot3 = r6;
                                    throw r5;
case 520:
                                    r5 = 1;
                                    if(!(r3 !== r5)) { _fun15123_ip = 551; continue _fun15123 }
case 527:
                                    if(!(r3 !== r4)) { _fun15123_ip = 539; continue _fun15123 }
case 531:
                                    r3 = {'value': undefined, 'done': true};
                                    return r3;
case 539:
                                    r3 = {'value': null, 'done': true};
                                    r3[0] = r0;
                                    return r3;
case 551:
                                    throw r0;
case 553:
                                    r0 = 3;
                                    r2 = r0;
                                    _closure2_slot3 = r0;
                                    r13 = 'Generator functions may not be called on executing generators';
                                    r0 = throwTypeError(r14);
                                }
                            };
                            return r1;
                        };
                        r1 = this;
                        r2 = r3.bind(r0)(r2, r1, r4);
                        return r2;
                    };
                    _closure1_slot5 = r4;
                    r4 = function() { // Original name: chonAnhThuVien, environment: r7
                        r0 = undefined;
                        r2 = undefined;
                        r2 = arguments;
                        r4 = r2;
                        r3 = spawnAsync;
                        r2 = function() { // Original name: ?anon_0_chonAnhThuVien, environment: r2
                            r0 = 0;
                            var _closure2_slot2 = r0;
                            var _closure2_slot3 = r0;
                            r1 = function* () { // Original name: ?anon_0_chonAnhThuVien, environment: r1
                                _fun15124: for(var _fun15124_ip = 0; ; ) switch(_fun15124_ip) {
case 0:
                                    r0 = _closure2_slot3;
                                    r2 = r0;
                                    r4 = 2;
                                    if(!(r0 !== r4)) { _fun15124_ip = 570; continue _fun15124 }
case 20:
                                    r0 = arguments[1];
                                    r3 = arguments[0];
                                    r5 = r2;
                                    r6 = 3;
                                    if(!(r5 !== r6)) { _fun15124_ip = 537; continue _fun15124 }
case 39:
                                    r2 = r4;
                                    _closure2_slot3 = r4;
                                    r7 = _closure2_slot2;
                                    r5 = 0;
                                    if(!(r5 !== r7)) { _fun15124_ip = 455; continue _fun15124 }
case 59:
                                    r5 = 1;
                                    if(!(r5 !== r7)) { _fun15124_ip = 281; continue _fun15124 }
case 69:
                                    if(!(r4 !== r7)) { _fun15124_ip = 124; continue _fun15124 }
case 73:
                                    if(!(r3 !== r5)) { _fun15124_ip = 115; continue _fun15124 }
case 77:
                                    if(!(r3 !== r4)) { _fun15124_ip = 96; continue _fun15124 }
case 81:
                                    r2 = r6;
                                    _closure2_slot3 = r6;
                                    r7 = {'value': undefined, 'done': true};
                                    return r7;
case 96:
                                    r2 = r6;
                                    _closure2_slot3 = r6;
                                    r7 = {'value': null, 'done': true};
                                    r7[0] = r0;
                                    return r7;
case 115:
                                    r2 = r6;
                                    _closure2_slot3 = r6;
                                    throw r0;
case 124:
                                    if(!(r3 !== r5)) { _fun15124_ip = 272; continue _fun15124 }
case 131:
                                    if(!(r3 !== r4)) { _fun15124_ip = 253; continue _fun15124 }
case 135:
                                    r7 = _closure2_slot0;
                                    _env_r7_slot1 = r0;
                                    r7 = _env_r7_slot1;
                                    r7 = r7.canceled;
                                    if(r7) { _fun15124_ip = 238; continue _fun15124 }
case 156:
                                    r7 = _closure2_slot0;
                                    r7 = _env_r7_slot1;
                                    r7 = r7.assets;
                                    r7 = r7[r0];
                                    if(!r7) { _fun15124_ip = 238; continue _fun15124 }
case 177:
                                    r7 = _closure2_slot0;
                                    r8 = _closure2_slot1;
                                    r9 = _env_r8_slot4;
                                    r7 = _env_r7_slot1;
                                    r7 = r7.assets;
                                    r7 = r7[r0];
                                    r8 = r7.uri;
                                    r7 = undefined;
                                    r8 = r9.bind(r7)(r8);
                                    _closure2_slot2 = r6;
                                    r2 = r5;
                                    _closure2_slot3 = r5;
                                    r7 = {'value': null, 'done': false};
                                    r7[0] = r8;
                                    return r7;
case 238:
                                    r2 = r6;
                                    _closure2_slot3 = r6;
                                    r7 = {'value': undefined, 'done': true};
                                    return r7;
case 253:
                                    r2 = r6;
                                    _closure2_slot3 = r6;
                                    r7 = {'value': null, 'done': true};
                                    r7[0] = r0;
                                    return r7;
case 272:
                                    r2 = r6;
                                    _closure2_slot3 = r6;
                                    throw r0;
case 281:
                                    if(!(r3 !== r5)) { _fun15124_ip = 446; continue _fun15124 }
case 288:
                                    if(!(r3 !== r4)) { _fun15124_ip = 427; continue _fun15124 }
case 295:
                                    r7 = _closure2_slot0;
                                    _env_r7_slot0 = r0;
                                    r7 = _env_r7_slot0;
                                    r8 = r7.granted;
                                    r7 = _closure2_slot1;
                                    if(r8) { _fun15124_ip = 369; continue _fun15124 }
case 324:
                                    r8 = _closure1_slot3;
                                    r11 = r8.Alert;
                                    r10 = r11.alert;
                                    r9 = 'HÃ£y cho phÃ©p á»©ng dá»¥ng xem áº£nh trong CÃ i Ä‘áº·t mÃ¡y.';
                                    r8 = 'ChÆ°a Ä‘Æ°á»£c cáº¥p quyá»n';
                                    r8 = r10.bind(r11)(r8, r9);
                                    r2 = r6;
                                    _closure2_slot3 = r6;
                                    r8 = {'value': undefined, 'done': true};
                                    return r8;
case 369:
                                    r9 = _closure1_slot1;
                                    r8 = r9.launchImageLibraryAsync;
                                    r7 = {'mediaTypes': null, 'quality': 0.8};
                                    r10 = ['images'];
                                    r7[0] = r10;
                                    r7 = r8.bind(r9)(r7);
                                    _closure2_slot2 = r4;
                                    r2 = r5;
                                    _closure2_slot3 = r5;
                                    r5 = {'value': null, 'done': false};
                                    r5[0] = r7;
                                    return r5;
case 427:
                                    r2 = r6;
                                    _closure2_slot3 = r6;
                                    r5 = {'value': null, 'done': true};
                                    r5[0] = r0;
                                    return r5;
case 446:
                                    r2 = r6;
                                    _closure2_slot3 = r6;
                                    throw r0;
case 455:
                                    var _closure2_slot1 = r5;
                                    var _closure2_slot0 = r8;
                                    r7 = undefined;
                                    var _closure3_slot0 = r7;
                                    var _closure3_slot1 = r7;
                                    r7 = _closure1_slot1;
                                    r5 = r7.requestMediaLibraryPermissionsAsync;
                                    r7 = r5.bind(r7)();
                                    r5 = 1;
                                    _closure2_slot2 = r5;
                                    r2 = r5;
                                    _closure2_slot3 = r5;
                                    r5 = {'value': null, 'done': false};
                                    r5[0] = r7;
                                    return r5;
case 526:
                                    CatchBlockStart(arg_register=5);
                                    r2 = r6;
                                    _closure2_slot3 = r6;
                                    throw r5;
case 537:
                                    r5 = 1;
                                    if(!(r3 !== r5)) { _fun15124_ip = 568; continue _fun15124 }
case 544:
                                    if(!(r3 !== r4)) { _fun15124_ip = 556; continue _fun15124 }
case 548:
                                    r3 = {'value': undefined, 'done': true};
                                    return r3;
case 556:
                                    r3 = {'value': null, 'done': true};
                                    r3[0] = r0;
                                    return r3;
case 568:
                                    throw r0;
case 570:
                                    r0 = 3;
                                    r2 = r0;
                                    _closure2_slot3 = r0;
                                    r13 = 'Generator functions may not be called on executing generators';
                                    r0 = throwTypeError(r14);
                                }
                            };
                            return r1;
                        };
                        r1 = this;
                        r2 = r3.bind(r0)(r2, r1, r4);
                        return r2;
                    };
                    _closure1_slot6 = r4;
                    r4 = function() { // Original name: chonTepKhac, environment: r7
                        r0 = undefined;
                        r2 = undefined;
                        r2 = arguments;
                        r4 = r2;
                        r3 = spawnAsync;
                        r2 = function() { // Original name: ?anon_0_chonTepKhac, environment: r2
                            r0 = 0;
                            var _closure2_slot2 = r0;
                            var _closure2_slot3 = r0;
                            r1 = function* () { // Original name: ?anon_0_chonTepKhac, environment: r1
                                _fun15125: for(var _fun15125_ip = 0; ; ) switch(_fun15125_ip) {
case 0:
                                    r0 = _closure2_slot3;
                                    r2 = r0;
                                    r4 = 2;
                                    if(!(r0 !== r4)) { _fun15125_ip = 403; continue _fun15125 }
case 20:
                                    r0 = arguments[1];
                                    r3 = arguments[0];
                                    r5 = r2;
                                    r6 = 3;
                                    if(!(r5 !== r6)) { _fun15125_ip = 370; continue _fun15125 }
case 39:
                                    r2 = r4;
                                    _closure2_slot3 = r4;
                                    r7 = _closure2_slot2;
                                    r5 = 0;
                                    if(!(r5 !== r7)) { _fun15125_ip = 265; continue _fun15125 }
case 59:
                                    r5 = 1;
                                    if(!(r5 !== r7)) { _fun15125_ip = 117; continue _fun15125 }
case 66:
                                    if(!(r3 !== r5)) { _fun15125_ip = 108; continue _fun15125 }
case 70:
                                    if(!(r3 !== r4)) { _fun15125_ip = 89; continue _fun15125 }
case 74:
                                    r2 = r6;
                                    _closure2_slot3 = r6;
                                    r7 = {'value': undefined, 'done': true};
                                    return r7;
case 89:
                                    r2 = r6;
                                    _closure2_slot3 = r6;
                                    r7 = {'value': null, 'done': true};
                                    r7[0] = r0;
                                    return r7;
case 108:
                                    r2 = r6;
                                    _closure2_slot3 = r6;
                                    throw r0;
case 117:
                                    if(!(r3 !== r5)) { _fun15125_ip = 256; continue _fun15125 }
case 124:
                                    if(!(r3 !== r4)) { _fun15125_ip = 237; continue _fun15125 }
case 128:
                                    r7 = _closure2_slot0;
                                    _env_r7_slot0 = r0;
                                    r7 = _env_r7_slot0;
                                    r7 = r7.canceled;
                                    if(r7) { _fun15125_ip = 222; continue _fun15125 }
case 149:
                                    r7 = _closure2_slot0;
                                    r8 = _closure2_slot1;
                                    r10 = _env_r8_slot4;
                                    r8 = _env_r7_slot0;
                                    r8 = r8.result;
                                    r9 = r8.uri;
                                    r7 = _env_r7_slot0;
                                    r7 = r7.result;
                                    r8 = r7.name;
                                    r7 = undefined;
                                    r7 = r10.bind(r7)(r9, r8);
                                    _closure2_slot2 = r4;
                                    r2 = r5;
                                    _closure2_slot3 = r5;
                                    r5 = {'value': null, 'done': false};
                                    r5[0] = r7;
                                    return r5;
case 222:
                                    r2 = r6;
                                    _closure2_slot3 = r6;
                                    r5 = {'value': undefined, 'done': true};
                                    return r5;
case 237:
                                    r2 = r6;
                                    _closure2_slot3 = r6;
                                    r5 = {'value': null, 'done': true};
                                    r5[0] = r0;
                                    return r5;
case 256:
                                    r2 = r6;
                                    _closure2_slot3 = r6;
                                    throw r0;
case 265:
                                    var _closure2_slot1 = r5;
                                    var _closure2_slot0 = r8;
                                    r7 = undefined;
                                    var _closure3_slot0 = r7;
                                    r5 = _closure1_slot0;
                                    r8 = r5.File;
                                    r7 = r8.pickFileAsync;
                                    r5 = {'mimeTypes': null};
                                    r9 = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'image/*'];
                                    r5[0] = r9;
                                    r7 = r7.bind(r8)(r5);
                                    r5 = 1;
                                    _closure2_slot2 = r5;
                                    r2 = r5;
                                    _closure2_slot3 = r5;
                                    r5 = {'value': null, 'done': false};
                                    r5[0] = r7;
                                    return r5;
case 359:
                                    CatchBlockStart(arg_register=5);
                                    r2 = r6;
                                    _closure2_slot3 = r6;
                                    throw r5;
case 370:
                                    r5 = 1;
                                    if(!(r3 !== r5)) { _fun15125_ip = 401; continue _fun15125 }
case 377:
                                    if(!(r3 !== r4)) { _fun15125_ip = 389; continue _fun15125 }
case 381:
                                    r3 = {'value': undefined, 'done': true};
                                    return r3;
case 389:
                                    r3 = {'value': null, 'done': true};
                                    r3[0] = r0;
                                    return r3;
case 401:
                                    throw r0;
case 403:
                                    r0 = 3;
                                    r2 = r0;
                                    _closure2_slot3 = r0;
                                    r12 = 'Generator functions may not be called on executing generators';
                                    r0 = throwTypeError(r13);
                                }
                            };
                            return r1;
                        };
                        r1 = this;
                        r2 = r3.bind(r0)(r2, r1, r4);
                        return r2;
                    };
                    _closure1_slot7 = r4;
                    if(!(r17 == r2)) { _fun10178_ip = 374; continue _fun10178 }
case 342:
                    r4 = null;
                    if(!r22) { _fun10178_ip = 371; continue _fun10178 }
case 347:
                    r6 = r22.split;
                    r5 = '/';
                    r6 = r6.bind(r22)(r5);
                    r5 = r6.pop;
                    r4 = r5.bind(r6)();
case 371:
                    r17 = r4;
case 374:
                    r10 = _closure0_slot8;
                    r6 = r10.jsxs;
                    r16 = _closure0_slot3;
                    r5 = r16.View;
                    r4 = {'style': null, 'children': null};
                    r8 = {'gap': null};
                    r20 = _closure0_slot7;
                    r13 = r20.spacing;
                    r13 = r13.sm;
                    r8[0] = r13;
                    r4[0] = r8;
                    r14 = r10.jsx;
                    r8 = r16.Pressable;
                    r13 = _closure0_slot12;
                    r15 = r13.input;
                    r18 = new Array(3);
                    r18[0] = r15;
                    if(!r19) { _fun10178_ip = 463; continue _fun10178 }
case 457:
                    r19 = r13.inputError;
case 463:
                    r15 = function() { // Original name: moLuaChon, environment: r7
                        r1 = _closure0_slot3;
                        r5 = r1.Alert;
                        r4 = r5.alert;
                        r1 = {'text': 'Chá»¥p áº£nh', 'onPress': null};
                        r3 = function() { // Original name: onPress, environment: r2
                            r1 = _closure1_slot5;
                            r0 = undefined;
                            r1 = r1.bind(r0)();
                            r0 = undefined;
                            return r0;
                        };
                        r1[1] = r3;
                        r3 = new Array(4);
                        r3[0] = r1;
                        r1 = {'text': 'Chá»n áº£nh tá»« thÆ° viá»‡n', 'onPress': null};
                        r6 = function() { // Original name: onPress, environment: r2
                            r1 = _closure1_slot6;
                            r0 = undefined;
                            r1 = r1.bind(r0)();
                            r0 = undefined;
                            return r0;
                        };
                        r1[1] = r6;
                        r3[1] = r1;
                        r1 = {'text': 'Chá»n tá»‡p PDF/Wordâ€¦', 'onPress': null};
                        r2 = function() { // Original name: onPress, environment: r2
                            r1 = _closure1_slot7;
                            r0 = undefined;
                            r1 = r1.bind(r0)();
                            r0 = undefined;
                            return r0;
                        };
                        r1[1] = r2;
                        r3[2] = r1;
                        r1 = {'text': 'Huá»·', 'style': 'cancel'};
                        r3[3] = r1;
                        r2 = 'Chá»n cÃ¡ch Ä‘Ã­nh kÃ¨m â€” áº£nh chá»¥p, áº£nh cÃ³ sáºµn, hoáº·c tá»‡p PDF/Word.';
                        r1 = 'ÄÃ­nh kÃ¨m tá»‡p';
                        r1 = r4.bind(r5)(r1, r2, r3);
                        r0 = undefined;
                        return r0;
                    };
                    r7 = {'style': null, 'onPress': null, 'disabled': null, 'children': null};
                    r18[1] = r19;
                    r19 = r13.fileBox;
                    r18[2] = r19;
                    r7[0] = r18;
                    r7[1] = r15;
                    r7[2] = r11;
                    r19 = r10.jsx;
                    if(r11) { _fun10178_ip = 556; continue _fun10178 }
case 508:
                    r15 = _closure0_slot4;
                    r18 = r15.Text;
                    r15 = {'style': null, 'children': null};
                    r21 = r13.fileBoxText;
                    r15[0] = r21;
                    r21 = 'ðŸ“Ž Chá»n tá»‡p Ä‘Ã­nh kÃ¨m';
                    if(!r22) { _fun10178_ip = 544; continue _fun10178 }
case 540:
                    r21 = 'ðŸ“Ž Äá»•i tá»‡p khÃ¡c';
case 544:
                    r15[1] = r21;
                    r15 = r19.bind(r1)(r18, r15);
                    _fun10178_ip = 592; continue _fun10178;
case 556:
                    r18 = r16.ActivityIndicator;
                    r16 = {'size': 'small', 'color': null};
                    r20 = r20.colors;
                    r20 = r20.primary;
                    r16[1] = r20;
                    r15 = r19.bind(r1)(r18, r16);
case 592:
                    r7[3] = r15;
                    r8 = r14.bind(r1)(r8, r7);
                    r7 = new Array(3);
                    r7[0] = r8;
                    r8 = null;
                    if(!r17) { _fun10178_ip = 672; continue _fun10178 }
case 615:
                    r8 = null;
                    if(r11) { _fun10178_ip = 672; continue _fun10178 }
case 620:
                    r15 = r10.jsxs;
                    r11 = _closure0_slot4;
                    r14 = r11.Text;
                    r11 = {'style': null, 'children': null};
                    r16 = r13.fileName;
                    r11[0] = r16;
                    r16 = ['âœ“ '];
                    r16[1] = r17;
                    r11[1] = r16;
                    r8 = r15.bind(r1)(r14, r11);
case 672:
                    r7[1] = r8;
                    r8 = null;
                    if(!r12) { _fun10178_ip = 720; continue _fun10178 }
case 681:
                    r11 = r10.jsx;
                    r9 = _closure0_slot4;
                    r10 = r9.Text;
                    r9 = {'style': null, 'children': null};
                    r13 = r13.error;
                    r9[0] = r13;
                    r9[1] = r12;
                    r8 = r11.bind(r1)(r10, r9);
case 720:
                    r7[2] = r8;
                    r4[1] = r7;
                    r4 = r6.bind(r1)(r5, r4);
                    return r4;
                }
            };
            var _closure0_slot10 = r1;
            r1 = function(a0) { // Original name: ChoiceList, environment: r2
                r1 = a0;
                r6 = r1.options;
                r2 = r1.selected;
                var _closure1_slot0 = r2;
                r1 = r1.onPress;
                var _closure1_slot1 = r1;
                r1 = _closure0_slot8;
                r3 = r1.jsx;
                r1 = _closure0_slot3;
                r2 = r1.View;
                r1 = {'style': null, 'children': null};
                r5 = _closure0_slot12;
                r5 = r5.choices;
                r1[0] = r5;
                r5 = r6.map;
                r4 = function(a0) { // Environment: r4
                    _fun13408: for(var _fun13408_ip = 0; ; ) switch(_fun13408_ip) {
case 0:
                        r4 = a0;
                        var _closure2_slot0 = r4;
                        r2 = _closure1_slot0;
                        r1 = r2.includes;
                        r9 = r1.bind(r2)(r4);
                        r7 = _closure0_slot8;
                        r3 = r7.jsx;
                        r1 = _closure0_slot3;
                        r2 = r1.Pressable;
                        r5 = _closure0_slot12;
                        r1 = r5.choice;
                        r10 = new Array(2);
                        r10[0] = r1;
                        r11 = r9;
                        if(!r9) { _fun13408_ip = 78; continue _fun13408 }
case 72:
                        r11 = r5.choiceActive;
case 78:
                        r1 = {'style': null, 'onPress': null, 'children': null};
                        r10[1] = r11;
                        r1[0] = r10;
                        r8 = function() { // Original name: onPress, environment: r8
                            r2 = _closure1_slot1;
                            r1 = _closure2_slot0;
                            r0 = undefined;
                            r1 = r2.bind(r0)(r1);
                            return r1;
                        };
                        r1[1] = r8;
                        r7 = r7.jsx;
                        r6 = _closure0_slot4;
                        r6 = r6.Text;
                        r10 = r5.choiceText;
                        r8 = new Array(2);
                        r8[0] = r10;
                        if(!r9) { _fun13408_ip = 138; continue _fun13408 }
case 132:
                        r9 = r5.choiceTextActive;
case 138:
                        r5 = {'style': null, 'children': null};
                        r8[1] = r9;
                        r5[0] = r8;
                        r5[1] = r4;
                        r0 = undefined;
                        r5 = r7.bind(r0)(r6, r5);
                        r1[2] = r5;
                        r1 = r3.bind(r0)(r2, r1, r4);
                        return r1;
                    }
                };
                r4 = r5.bind(r6)(r4);
                r1[1] = r4;
                r0 = undefined;
                r1 = r3.bind(r0)(r2, r1);
                return r1;
            };
            var _closure0_slot11 = r1;
            r8 = global;
            r9 = r8.Object;
            r7 = r9.defineProperty;
            r6 = '__esModule';
            r1 = {'value': true};
            r1 = r7.bind(r9)(r5, r6, r1);
            r0 = undefined;
            r1 = function(a0, a1) { // Original name: withCheckboxDefaults
                _fun10175: for(var _fun10175_ip = 0; ; ) switch(_fun10175_ip) {
case 0:
                    r5 = undefined;
                    r6 = undefined;
                    r0 = {};
                    r9 = a1;
                    r10 = r0;
                    r1 = copyDataProperties(r11, r10);
                    r4 = a0;
                    r2 = r4[Symbol.iterator];
                    r4 = r2().next;
                    r3 = false;
                    r1 = 'checkbox';
case 28:
                    r7 = r4;
                    r7 = r7().value;
                    r8 = r2;
                    if(!(r8 !== r5)) { _fun10175_ip = 91; continue _fun10175 }
case 42:
                    r6 = r7;
                    r7 = r7.type;
                    if(!(r7 === r1)) { _fun10175_ip = 82; continue _fun10175 }
case 54:
                    r7 = r6;
                    r7 = r7.key;
                    r7 = r0[r7];
                    if(!(r7 === r5)) { _fun10175_ip = 82; continue _fun10175 }
case 70:
                    r7 = r6;
                    r7 = r7.key;
                    r0[r7] = r3;
case 82:
                    _fun10175_ip = 28; continue _fun10175;
case 84:
                    CatchBlockStart(arg_register=1);
                    r2.return();
                    throw r1;
case 91:
                    return r0;
                }
            };
            r5['withCheckboxDefaults'] = r1;
            r1 = function(a0) { // Original name: DynamicForm, environment: r2
                r1 = a0;
                r6 = r1.fields;
                r2 = r1.values;
                var _closure1_slot0 = r2;
                r2 = r1.errors;
                var _closure1_slot1 = r2;
                r1 = r1.onChange;
                var _closure1_slot2 = r1;
                r1 = _closure0_slot8;
                r3 = r1.jsx;
                r1 = _closure0_slot3;
                r2 = r1.View;
                r1 = {'style': null, 'children': null};
                r5 = _closure0_slot12;
                r5 = r5.form;
                r1[0] = r5;
                r5 = r6.map;
                r4 = function(a0) { // Environment: r4
                    _fun13397: for(var _fun13397_ip = 0; ; ) switch(_fun13397_ip) {
case 0:
                        r3 = a0;
                        var _closure2_slot0 = r3;
                        r6 = _closure1_slot1;
                        r4 = r3.key;
                        var _closure2_slot0 = r6;
                        var _closure2_slot1 = r4;
                        if(r6) { _fun13397_ip = 45; continue _fun13397 }
case 39:
                        r10 = new Array(0);
                        _fun13397_ip = 137; continue _fun13397;
case 45:
                        r7 = global;
                        r8 = r7.Object;
                        r7 = r8.keys;
                        r9 = r7.bind(r8)(r6);
                        r8 = r9.filter;
                        r7 = function(a0) { // Environment: r5
                            r2 = a0;
                            r1 = r2.startsWith;
                            r5 = _closure2_slot1;
                            r0 = global;
                            r0 = r0.HermesInternal;
                            r4 = r0.concat;
                            r3 = '.';
                            r0 = '';
                            r0 = r4.bind(r0)(r5, r3);
                            r0 = r1.bind(r2)(r0);
                            return r0;
                        };
                        r8 = r8.bind(r9)(r7);
                        r7 = r8.flatMap;
                        r5 = function(a0) { // Environment: r5
                            r1 = _closure2_slot0;
                            r0 = a0;
                            r0 = r1[r0];
                            return r0;
                        };
                        r5 = r7.bind(r8)(r5);
                        r6 = r6[r4];
                        r1 = null;
                        if(!(r6 == r1)) { _fun13397_ip = 108; continue _fun13397 }
case 104:
                        r6 = new Array(0);
case 108:
                        r4 = new Array(0);
                        r24 = 0;
                        r26 = r4;
                        r25 = r6;
                        r24 = arraySpread(r27, r26, r25);
                        r26 = r4;
                        r25 = r5;
                        r0 = arraySpread(r27, r26, r25);
                        r10 = r4;
case 137:
                        r9 = _closure0_slot8;
                        r6 = r9.jsxs;
                        r4 = _closure0_slot3;
                        r5 = r4.View;
                        r4 = {'style': null, 'children': null};
                        r17 = _closure0_slot12;
                        r7 = r17.field;
                        r4[0] = r7;
                        r16 = r9.jsxs;
                        r12 = _closure0_slot4;
                        r15 = r12.Text;
                        r7 = {'style': null, 'children': null};
                        r11 = r17.label;
                        r7[0] = r11;
                        r11 = r3.label;
                        r18 = new Array(2);
                        r18[0] = r11;
                        r20 = r3.required;
                        r19 = null;
                        if(!r20) { _fun13397_ip = 269; continue _fun13397 }
case 231:
                        r22 = r9.jsx;
                        r21 = r12.Text;
                        r20 = {'style': null, 'children': ' *'};
                        r23 = r17.required;
                        r20[0] = r23;
                        r1 = undefined;
                        r19 = r22.bind(r1)(r21, r20);
case 269:
                        r18[1] = r19;
                        r7[1] = r18;
                        r1 = undefined;
                        r15 = r16.bind(r1)(r15, r7);
                        r7 = new Array(4);
                        r7[0] = r15;
                        r15 = r3.help;
                        r11 = null;
                        if(!r15) { _fun13397_ip = 346; continue _fun13397 }
case 304:
                        r16 = r9.jsx;
                        r15 = r12.Text;
                        r12 = {'style': null, 'children': null};
                        r17 = r17.help;
                        r12[0] = r17;
                        r17 = r3.help;
                        r12[1] = r17;
                        r11 = r16.bind(r1)(r15, r12);
case 346:
                        r7[1] = r11;
                        r12 = r9.jsx;
                        r11 = _closure0_slot9;
                        r9 = {'field': null, 'value': null, 'onChange': null, 'hasError': null};
                        r9[0] = r3;
                        r15 = _closure1_slot0;
                        r14 = r3.key;
                        r14 = r15[r14];
                        r9[1] = r14;
                        r13 = function(a0) { // Original name: onChange, environment: r13
                            r3 = _closure1_slot2;
                            r1 = _closure2_slot0;
                            r2 = r1.key;
                            r0 = undefined;
                            r1 = a0;
                            r1 = r3.bind(r0)(r2, r1);
                            return r1;
                        };
                        r9[2] = r13;
                        r13 = r10.length;
                        r0 = 0;
                        r2 = r13 > r0;
                        r9[3] = r2;
                        r9 = r12.bind(r1)(r11, r9);
                        r7[2] = r9;
                        r9 = r10.map;
                        r8 = function(a0) { // Environment: r8
                            r4 = a0;
                            r1 = _closure0_slot8;
                            r3 = r1.jsx;
                            r1 = _closure0_slot4;
                            r2 = r1.Text;
                            r1 = {'style': null, 'children': null};
                            r5 = _closure0_slot12;
                            r5 = r5.error;
                            r1[0] = r5;
                            r1[1] = r4;
                            r0 = undefined;
                            r1 = r3.bind(r0)(r2, r1, r4);
                            return r1;
                        };
                        r8 = r9.bind(r10)(r8);
                        r7[3] = r8;
                        r4[1] = r7;
                        r3 = r3.key;
                        r3 = r6.bind(r1)(r5, r4, r3);
                        return r3;
                    }
                };
                r4 = r5.bind(r6)(r4);
                r1[1] = r4;
                r0 = undefined;
                r1 = r3.bind(r0)(r2, r1);
                return r1;
            };
            r5['DynamicForm'] = r1;
            r1 = r3[r0];
            r1 = r4.bind(r0)(r1);
            var _closure0_slot0 = r1;
            r1 = r3[r1];
            r6 = r4.bind(r0)(r1);
            var _closure0_slot0 = r6;
            var _closure0_slot1 = r0;
            if(!r6) { _fun2042_ip = 140; continue _fun2042 }
case 129:
            r5 = r6.__esModule;
            r1 = r6;
            if(r5) { _fun2042_ip = 189; continue _fun2042 }
case 140:
            r5 = {};
            _closure0_slot1 = r5;
            if(!r6) { _fun2042_ip = 180; continue _fun2042 }
case 149:
            r9 = r8.Object;
            r8 = r9.keys;
            r9 = r8.bind(r9)(r6);
            r8 = r9.forEach;
            r7 = function(a0) { // Environment: r7
                _fun13394: for(var _fun13394_ip = 0; ; ) switch(_fun13394_ip) {
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
                    if(r6) { _fun13394_ip = 77; continue _fun13394 }
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
            r7 = r8.bind(r9)(r7);
case 180:
            r5['default'] = r6;
            r1 = r5;
case 189:
            var _closure0_slot1 = r1;
            r1 = r3[r2];
            r1 = r4.bind(r0)(r1);
            var _closure0_slot2 = r1;
            r1 = r3[r3];
            r1 = r4.bind(r0)(r1);
            var _closure0_slot3 = r1;
            r5 = r3[r4];
            r5 = r4.bind(r0)(r5);
            var _closure0_slot4 = r5;
            r5 = r3[r5];
            r5 = r4.bind(r0)(r5);
            var _closure0_slot5 = r5;
            r5 = r3[r6];
            r5 = r4.bind(r0)(r5);
            var _closure0_slot6 = r5;
            r5 = r3[r7];
            r6 = r4.bind(r0)(r5);
            var _closure0_slot7 = r6;
            r3 = r3[r8];
            r3 = r4.bind(r0)(r3);
            var _closure0_slot8 = r3;
            r4 = r1.StyleSheet;
            r3 = r4.create;
            r1 = {'form': null, 'field': null, 'label': null, 'required': null, 'help': null, 'input': null, 'inputError': null, 'textarea': null, 'error': null, 'switchRow': null, 'switchLabel': null, 'choices': null, 'choice': null, 'choiceActive': null, 'choiceText': null, 'choiceTextActive': null, 'scaleRow': null, 'scaleItem': null, 'scaleItemActive': null, 'scaleText': null, 'scaleTextActive': null, 'fileBox': null, 'fileBoxText': null, 'fileName': null};
            r5 = {'gap': null};
            r7 = r6.spacing;
            r7 = r7.xl;
            r5[0] = r7;
            r1[0] = r5;
            r5 = {'gap': null};
            r7 = r6.spacing;
            r7 = r7.sm;
            r5[0] = r7;
            r1[1] = r5;
            r5 = {};
            r7 = r6.type;
            r11 = r7.headlineSm;
            r12 = r5;
            r7 = copyDataProperties(r13, r12);
            r7 = r6.colors;
            r7 = r7.text;
            r5['color'] = r7;
            r1[2] = r5;
            r5 = {'color': null};
            r7 = r6.colors;
            r7 = r7.danger;
            r5[0] = r7;
            r1[3] = r5;
            r5 = {};
            r7 = r6.type;
            r11 = r7.labelMd;
            r12 = r5;
            r7 = copyDataProperties(r13, r12);
            r7 = r6.colors;
            r7 = r7.tertiary;
            r5['color'] = r7;
            r1[4] = r5;
            r5 = {'borderWidth': 1, 'borderColor': null, 'borderRadius': null, 'paddingHorizontal': null, 'paddingVertical': null};
            r7 = r6.colors;
            r7 = r7.border;
            r5[1] = r7;
            r7 = r6.radius;
            r7 = r7.md;
            r5[2] = r7;
            r7 = r6.spacing;
            r7 = r7.lg;
            r5[3] = r7;
            r7 = r6.spacing;
            r7 = r7.md;
            r5[4] = r7;
            r7 = r6.type;
            r11 = r7.bodyLg;
            r12 = r5;
            r7 = copyDataProperties(r13, r12);
            r7 = r6.colors;
            r7 = r7.text;
            r5['color'] = r7;
            r7 = r6.colors;
            r7 = r7.surface;
            r5['backgroundColor'] = r7;
            r1[5] = r5;
            r5 = {'borderColor': null};
            r7 = r6.colors;
            r7 = r7.danger;
            r5[0] = r7;
            r1[6] = r5;
            r5 = {'minHeight': 100, 'textAlignVertical': 'top'};
            r1[7] = r5;
            r5 = {};
            r7 = r6.type;
            r11 = r7.labelMd;
            r12 = r5;
            r7 = copyDataProperties(r13, r12);
            r7 = r6.colors;
            r7 = r7.danger;
            r5['color'] = r7;
            r1[8] = r5;
            r5 = {'flexDirection': 'row', 'alignItems': 'center', 'gap': null};
            r7 = r6.spacing;
            r7 = r7.md;
            r5[2] = r7;
            r1[9] = r5;
            r5 = {};
            r7 = r6.type;
            r11 = r7.bodyMd;
            r12 = r5;
            r7 = copyDataProperties(r13, r12);
            r7 = r6.colors;
            r7 = r7.text;
            r5['color'] = r7;
            r1[10] = r5;
            r5 = {'flexDirection': 'row', 'flexWrap': 'wrap', 'gap': null};
            r7 = r6.spacing;
            r7 = r7.sm;
            r5[2] = r7;
            r1[11] = r5;
            r5 = {'borderWidth': 1, 'borderColor': null, 'borderRadius': null, 'paddingHorizontal': null, 'paddingVertical': null, 'backgroundColor': null};
            r7 = r6.colors;
            r7 = r7.border;
            r5[1] = r7;
            r7 = r6.radius;
            r7 = r7.md;
            r5[2] = r7;
            r7 = r6.spacing;
            r7 = r7.lg;
            r5[3] = r7;
            r7 = r6.spacing;
            r7 = r7.md;
            r5[4] = r7;
            r7 = r6.colors;
            r7 = r7.surface;
            r5[5] = r7;
            r1[12] = r5;
            r5 = {'borderColor': null, 'backgroundColor': null};
            r7 = r6.colors;
            r7 = r7.primary;
            r5[0] = r7;
            r7 = r6.colors;
            r7 = r7.primarySoft;
            r5[1] = r7;
            r1[13] = r5;
            r5 = {};
            r7 = r6.type;
            r11 = r7.bodyMd;
            r12 = r5;
            r7 = copyDataProperties(r13, r12);
            r7 = r6.colors;
            r7 = r7.text;
            r5['color'] = r7;
            r1[14] = r5;
            r5 = {};
            r7 = r6.type;
            r11 = r7.bodyMd;
            r12 = r5;
            r7 = copyDataProperties(r13, r12);
            r7 = r6.type;
            r7 = r7.headlineSm;
            r7 = r7.fontFamily;
            r5['fontFamily'] = r7;
            r7 = r6.colors;
            r7 = r7.primaryDeep;
            r5['color'] = r7;
            r1[15] = r5;
            r5 = {'flexDirection': 'row', 'gap': null};
            r7 = r6.spacing;
            r7 = r7.sm;
            r5[1] = r7;
            r1[16] = r5;
            r5 = {'width': 48, 'height': 48, 'borderRadius': null, 'borderWidth': 1, 'borderColor': null, 'alignItems': 'center', 'justifyContent': 'center', 'backgroundColor': null};
            r7 = r6.radius;
            r7 = r7.md;
            r5[2] = r7;
            r7 = r6.colors;
            r7 = r7.border;
            r5[4] = r7;
            r7 = r6.colors;
            r7 = r7.surface;
            r5[7] = r7;
            r1[17] = r5;
            r5 = {'borderColor': null, 'backgroundColor': null};
            r7 = r6.colors;
            r7 = r7.primary;
            r5[0] = r7;
            r7 = r6.colors;
            r7 = r7.primary;
            r5[1] = r7;
            r1[18] = r5;
            r5 = {};
            r7 = r6.type;
            r11 = r7.headlineSm;
            r12 = r5;
            r7 = copyDataProperties(r13, r12);
            r7 = r6.colors;
            r7 = r7.text;
            r5['color'] = r7;
            r1[19] = r5;
            r5 = {'color': null};
            r7 = r6.colors;
            r7 = r7.onPrimary;
            r5[0] = r7;
            r1[20] = r5;
            r5 = {'alignItems': 'center', 'justifyContent': 'center'};
            r1[21] = r5;
            r5 = {};
            r7 = r6.type;
            r11 = r7.bodyLg;
            r12 = r5;
            r7 = copyDataProperties(r13, r12);
            r7 = r6.colors;
            r7 = r7.primary;
            r5['color'] = r7;
            r1[22] = r5;
            r5 = {};
            r7 = r6.type;
            r11 = r7.labelMd;
            r12 = r5;
            r7 = copyDataProperties(r13, r12);
            r6 = r6.colors;
            r6 = r6.tertiary;
            r5['color'] = r6;
            r1[23] = r5;
            r1 = r3.bind(r4)(r1);
            var _closure0_slot12 = r1;
            return r0;
        }
    };
    r9 = r11.bind(r5)(r9, r0, r10);
    r11 = r8.__d;
