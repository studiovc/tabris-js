import {Stack, contentView, TextView} from 'tabris';

const stack = new Stack({
  layoutData: 'stretch',
  spacing: 16
}).appendTo(contentView);

stack.append(
  new TextView({text: 'one'}),
  new TextView({text: 'two'}),
  new TextView({text: 'three'})
);
