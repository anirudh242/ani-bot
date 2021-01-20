"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findMember = void 0;
function findMember(query, guild) {
    return __awaiter(this, void 0, void 0, function* () {
        let member = null;
        if (!query || typeof query !== 'string')
            return;
        // Try to search using ID
        if (query.match(/^<@!?(\d+)>$/)) {
            const id = query.match(/^<@!?(\d+)>$/)[1];
            member = yield guild.members.cache.get(id);
            if (member)
                return member.user;
        }
        // Try to search using discrim
        if (query.match(/^!?(\w+)#(\d+)$/)) {
            guild = yield guild.fetch();
            member = guild.members.cache.find((m) => m.user.tag === query);
            if (member)
                return member.user;
        }
        // Try to find the user itself
        member = yield guild.members.cache.get(query);
        // If member doesn't exist return as message.author
        if (!member) {
            return message.author;
        }
        return member.user;
    });
}
exports.findMember = findMember;
