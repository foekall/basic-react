
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));
import { cleanup, render, screen } from "@testing-library/react";
import TopStories from "./TopStories";
import axiosMock from "axios";
import { act } from "react-dom/test-utils";

afterEach(cleanup)

test("fetch and display top stories", async () => {
    axiosMock.get.mockImplementationOnce(() => Promise.resolve({
        data: {
            "response": {
              "status": "ok",
              "userTier": "developer",
              "total": 26513,
              "startIndex": 1,
              "pageSize": 8,
              "currentPage": 1,
              "pages": 3315,
              "orderBy": "newest",
              "results": [
                {
                  "id": "news/2022/feb/15/from-icy-mountains-to-subtropical-lowlands-bhutan-varied-climate",
                  "type": "article",
                  "sectionId": "news",
                  "sectionName": "News",
                  "webPublicationDate": "2022-02-15T06:00:06Z",
                  "webTitle": "From icy mountains to subtropical lowlands: Bhutan’s varied climate",
                  "webUrl": "https://www.theguardian.com/news/2022/feb/15/from-icy-mountains-to-subtropical-lowlands-bhutan-varied-climate",
                  "apiUrl": "https://content.guardianapis.com/news/2022/feb/15/from-icy-mountains-to-subtropical-lowlands-bhutan-varied-climate",
                  "isHosted": false,
                  "pillarId": "pillar/news",
                  "pillarName": "News"
                },
                {
                  "id": "news/2022/feb/14/corrections-and-clarifications",
                  "type": "article",
                  "sectionId": "news",
                  "sectionName": "News",
                  "webPublicationDate": "2022-02-14T21:00:02Z",
                  "webTitle": "Corrections and clarifications",
                  "webUrl": "https://www.theguardian.com/news/2022/feb/14/corrections-and-clarifications",
                  "apiUrl": "https://content.guardianapis.com/news/2022/feb/14/corrections-and-clarifications",
                  "isHosted": false,
                  "pillarId": "pillar/news",
                  "pillarName": "News"
                },
                {
                  "id": "news/2022/feb/13/corrections-and-clarifications",
                  "type": "article",
                  "sectionId": "news",
                  "sectionName": "News",
                  "webPublicationDate": "2022-02-13T21:00:20Z",
                  "webTitle": "Corrections and clarifications",
                  "webUrl": "https://www.theguardian.com/news/2022/feb/13/corrections-and-clarifications",
                  "apiUrl": "https://content.guardianapis.com/news/2022/feb/13/corrections-and-clarifications",
                  "isHosted": false,
                  "pillarId": "pillar/news",
                  "pillarName": "News"
                },
                {
                  "id": "news/2022/feb/13/nazanin-zaghari-ratcliffe-release-deal-collapses",
                  "type": "article",
                  "sectionId": "news",
                  "sectionName": "News",
                  "webPublicationDate": "2022-02-13T07:30:16Z",
                  "webTitle": "Zaghari-Ratcliffe ‘angry at her life being stolen’ after deal for release collapses",
                  "webUrl": "https://www.theguardian.com/news/2022/feb/13/nazanin-zaghari-ratcliffe-release-deal-collapses",
                  "apiUrl": "https://content.guardianapis.com/news/2022/feb/13/nazanin-zaghari-ratcliffe-release-deal-collapses",
                  "isHosted": false,
                  "pillarId": "pillar/news",
                  "pillarName": "News"
                },
                {
                  "id": "news/2022/feb/13/for-the-record",
                  "type": "article",
                  "sectionId": "news",
                  "sectionName": "News",
                  "webPublicationDate": "2022-02-13T06:00:15Z",
                  "webTitle": "For the record",
                  "webUrl": "https://www.theguardian.com/news/2022/feb/13/for-the-record",
                  "apiUrl": "https://content.guardianapis.com/news/2022/feb/13/for-the-record",
                  "isHosted": false,
                  "pillarId": "pillar/news",
                  "pillarName": "News"
                },
                {
                  "id": "news/2022/feb/12/europeans-more-likely-to-vote-green-after-extreme-weather-events",
                  "type": "article",
                  "sectionId": "news",
                  "sectionName": "News",
                  "webPublicationDate": "2022-02-12T06:00:12Z",
                  "webTitle": "Europeans more likely to vote green after extreme weather events",
                  "webUrl": "https://www.theguardian.com/news/2022/feb/12/europeans-more-likely-to-vote-green-after-extreme-weather-events",
                  "apiUrl": "https://content.guardianapis.com/news/2022/feb/12/europeans-more-likely-to-vote-green-after-extreme-weather-events",
                  "isHosted": false,
                  "pillarId": "pillar/news",
                  "pillarName": "News"
                },
                {
                  "id": "news/datablog/2022/feb/12/religious-discrimination-revolt-crossing-the-floor-big-under-menzies-but-increasingly-rare",
                  "type": "article",
                  "sectionId": "news",
                  "sectionName": "News",
                  "webPublicationDate": "2022-02-12T00:32:17Z",
                  "webTitle": "Religious discrimination revolt: historical data shows scale of rebellion",
                  "webUrl": "https://www.theguardian.com/news/datablog/2022/feb/12/religious-discrimination-revolt-crossing-the-floor-big-under-menzies-but-increasingly-rare",
                  "apiUrl": "https://content.guardianapis.com/news/datablog/2022/feb/12/religious-discrimination-revolt-crossing-the-floor-big-under-menzies-but-increasingly-rare",
                  "isHosted": false,
                  "pillarId": "pillar/news",
                  "pillarName": "News"
                },
                {
                  "id": "news/2022/feb/11/corrections-and-clarifications",
                  "type": "article",
                  "sectionId": "news",
                  "sectionName": "News",
                  "webPublicationDate": "2022-02-11T21:00:35Z",
                  "webTitle": "Corrections and clarifications",
                  "webUrl": "https://www.theguardian.com/news/2022/feb/11/corrections-and-clarifications",
                  "apiUrl": "https://content.guardianapis.com/news/2022/feb/11/corrections-and-clarifications",
                  "isHosted": false,
                  "pillarId": "pillar/news",
                  "pillarName": "News"
                }
              ]
            }
          }
    }));

    await act( async () => {
        render(<TopStories sortDirection="newest" />)
    });

    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(axiosMock.get).toHaveBeenCalledWith("https://content.guardianapis.com/search?section=news&order-by=newest&page-size=8&api-key=6128ffae-7fdc-4f8a-814e-e2e7f61c7d59");

    expect(await (await screen.findAllByTestId("sps-card")).length).toBe(8);
    expect(await screen.queryByTestId("top-stories").textContent).toBe("From icy mountains to subtropical lowlands: Bhutan’s varied climateCorrections and clarificationsCorrections and clarificationsZaghari-Ratcliffe ‘angry at her life being stolen’ after deal for release collapsesFor the record");

});