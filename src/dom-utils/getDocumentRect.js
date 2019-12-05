// @flow
import getRectRelativeToOffsetParent from './getRectRelativeToOffsetParent';
import getWindow from './getWindow';
import getDocumentElement from './getDocumentElement';
import getWindowScroll from './getWindowScroll';

export default (element: HTMLElement) => {
  const win = getWindow(element);
  const winScroll = getWindowScroll(element);
  const documentRect = getRectRelativeToOffsetParent(
    getDocumentElement(element)
  );

  documentRect.height = Math.max(documentRect.height, win.innerHeight);
  documentRect.width = Math.max(documentRect.width, win.innerWidth);
  documentRect.x = -winScroll.scrollLeft;
  documentRect.y = -winScroll.scrollTop;

  return documentRect;
};
