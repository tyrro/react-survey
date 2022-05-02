import { highResolutionImageUrl } from './highResolutionImageUrl';

describe('highResolutionImageUrl', () => {
  it("appends 'l' at the end of the provided url", () => {
    const lowResolutionImageUrl = 'image.low';

    expect(highResolutionImageUrl(lowResolutionImageUrl)).toEqual(`${lowResolutionImageUrl}l`);
  });
});
