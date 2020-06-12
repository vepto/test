import { ISSInterface } from "../interface/ISS-interface";


export class Satelite {

    static async http<T>(
        request: RequestInfo
    ): Promise<T> {
        const response = await fetch(request);
        const body = await response.json();
        return body;
    }

    private async getData() {
        try {
            const data = await Satelite.http<ISSInterface>(
                'https://api.wheretheiss.at/v1/satellites/25544');
            this.updateData(data);
        } catch (error) {
            console.log(error);
        }
    }

    private updateData(data: ISSInterface) {
        const element = document.getElementById('tracker') as HTMLSelectElement;
        element.innerText = `name: ${data.name}, lat ${data.latitude}, alt ${data.altitude}`
    }

    interval() {
        setInterval(() => this.getData(), 2000);
    }
}



/*  https://api.wheretheiss.at/v1/satellites/25544 */