import { Controller, Get, Param } from '@nestjs/common';
import * as client from 'then-jsonp';
// import * as util from 'util';

@Controller('atom')
export class AtomController {

    @Get(':id')
    async getAtom(@Param() param): Promise<string> {
        const id = param.id;
        if (!this.isNumber(id)) {
            return 'must specify sma artist number as parameter.';
        }
        const data = await this.getJsonp(id);
        // console.log(util.inspect(data, false, null));
        /* data is
        {
            info: {
                item: [
                    {
                        id: '81888',
                        title: '「RADIO CRAZY」タイムテーブル変更のお知らせ',
                        pubDate: '2018/12/27',
                        text: 'html string',
                    },
                    {
                        id: '81857',
                        title: 'MONOEYES 新グッズ販売のお知らせ',
                        pubDate: '2018/12/26',
                        text: 'string',
                    },
                ],
            },
        };
        */
        const items = data.info.item;
        const latestUpdateDateString = new Date(items[0].pubDate).toISOString();
        return `
        ${this.createHeader()}
        ${this.createRootTag(id, latestUpdateDateString)}
        ${this.createEntries(items)}
        ${this.createEndTag()}
        `;
    }

    private isNumber(id: string): boolean {
        return id.match(/^[0-9]+$/) !== null;
    }

    private getJsonp(id: string): Promise<any> {
        return client('GET', `http://www.sma.co.jp/artist/json/info/${id}`, { callbackName: 'callback' });
    }

    // Atom

    private createHeader(): string {
        return `<?xml version='1.0' encoding='UTF-8'?>
<feed xmlns='http://www.w3.org/2005/Atom' xml:lang='ja'>`;
    }
    private createRootTag(id: string, date: string): string {
        return `<id>sma ${id} feed</id>
        <title>sma ${id} feed</title>
        <updated>${date}</updated>`;
    }
    private createEntries(items: [any]): string {
        return items.map(item => {
            const d = new Date(item.pubDate).toISOString();
            return `<entry>
                <id>${item.id}</id>
                <title>${item.title}</title>
                <updated>${d}</updated>
                <summary>${item.text}</summary>
            </entry>`;
        }).join();
    }
    private createEndTag(): string {
        return '</feed>';
    }

}
