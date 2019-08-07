import {
  animate,
  animateChild,
  stagger,
  style,
  query,
  transition,
  trigger,
  state
} from '@angular/animations';

export const ItemAnimation = trigger('ItemAnimation', [
  transition(':enter', [
    style({ transform: 'translate3d(0, 5px, 0)', opacity: 0 }),
    animate('150ms ease-in',
      style({ transform: 'translate3d(0, 0, 0)', opacity: 1 }))
  ])
]);

export const ListAnimation = trigger('ListAnimation', [
  transition(':enter', [
    query('@ItemAnimation', stagger(50, animateChild()), { optional: true })
  ])
]);

export const DismissAnimation = trigger('DismissAnimation', [
  state('true', style({ height: '0px', marginBottom: '0px', opacity: 0, display: 'none' })),
  state('false', style({ height: '*', marginBottom: '*', opacity: 1, display: 'block' })),
  transition('false <=> true', animate(300))
]);

export const CollapseAnimation = trigger('CollapseAnimation', [
  state('true', style({ height: '0px' })),
  state('false', style({ height: '*' })),
  transition('false <=> true', animate(150))
]);

export const CardExpandAnimation = trigger('CardExpandAnimation', [
  state('true', style({ maxHeight: '{{ open }}' }), { params: { open: '366px' } }),
  state('false', style({ maxHeight: '{{ closed }}' }), { params: { closed: '*' } }),
  transition('false <=> true', animate(150))
]);
