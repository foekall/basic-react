
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));
import { cleanup, render, screen } from "@testing-library/react";
import TopStories from "./TopStories";
import axiosMock from "axios";
import { act } from "react-dom/test-utils";
import Sports from "./Sports";

afterEach(cleanup)

test("fetch and display sport news", async () => {
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
                }
              ]
            }
          }
    }));

    await act( async () => {
        render(<Sports />)
    });

    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(axiosMock.get).toHaveBeenCalledWith("https://content.guardianapis.com/search?section=sport|culture|lifestyle&order-by=newest&page-size=3&api-key=6128ffae-7fdc-4f8a-814e-e2e7f61c7d59");
    expect(await (await screen.findAllByTestId("sps-card")).length).toBe(3);

    const linkElement = screen.getByText(/Sports/i);
    expect(linkElement).toBeInTheDocument();

});