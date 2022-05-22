import React, { useState } from 'react';
import Pagination from '../App';

describe('simple Pagination', function () {
        let wrapper: { find: (arg0: string) => any; };

        it('prev-button should be disabled', () => {
            const prevButton = wrapper.find('.rc-pagination-prev');
            expect(prevButton.hasClass('rc-pagination-disabled')).toBe(true);
            expect(prevButton.getDOMNode().getAttribute('aria-disabled')).toBe('true');
        });
    })

