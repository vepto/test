var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class Satelite {
    static http(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(request);
            const body = yield response.json();
            return body;
        });
    }
    getData() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield Satelite.http('https://api.wheretheiss.at/v1/satellites/25544');
                this.updateData(data);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    updateData(data) {
        const element = document.getElementById('tracker');
        element.innerText = `name: ${data.name}, lat ${data.latitude}, alt ${data.altitude}`;
    }
    interval() {
        setInterval(() => {
            console.log(this);
            this.getData();
        }, 2000);
    }
}
/*  https://api.wheretheiss.at/v1/satellites/25544 */ 
