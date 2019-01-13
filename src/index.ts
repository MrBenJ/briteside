import MarkdownParserFactory from 'markdown-it';
import path from 'path';

const Parser = MarkdownParserFactory();

/** @type {Object} - An Event */
type Event = {};

/**
 * Creates an event on EventBrite
 */
export default function createEvent(mdPath: string, event: Event)  {
  console.log(mdPath);
}
