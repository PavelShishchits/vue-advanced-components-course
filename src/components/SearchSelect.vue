<template>
    <on-click-outside :do="close">
        <div class="search-select" :class="{ 'is-active': isOpen }">
            <button ref="button" @click="open" type="button" class="search-select-input">
                <span v-if="value !== null">{{ value }}</span>
                <span v-else class="search-select-placeholder">Select a band...</span>
            </button>
            <div ref="dropdown" v-show="isOpen" class="search-select-dropdown">
                <input ref="searchField" class="search-select-search" v-model.trim="search"
                    @keydown.esc="close"
                    @keydown.up="highlightPrev"
                    @keydown.down="highlightNext"
                    @keydown.enter.prevent="selectHighlighted"
                    @keydown.tab.prevent
                >
                <ul ref="options" v-show="filteredOptions.length > 0" class="search-select-options">
                    <li class="search-select-option" :class="{'is-active': highlightedIndex === i}"
                        v-for="(option, i) in filteredOptions"
                        :key="option"
                        @click="select(option)"
                    >{{ option }}</li>
                </ul>
                 <div v-show="filteredOptions.length === 0" class="search-select-empty">No results found for "{{ search }}"</div>
            </div>
        </div>
    </on-click-outside>
</template>

<script>
    import OnClickOutside from '@/components/utils/OnClickOutside';
    import {createPopper } from '@popperjs/core';

    export default {
        props: {
            value: {
                required: true
            },
            options: {
                type: Array,
                required: true
            },
            filterFunction: {
                type: Function,
                required: true
            }
        },
        data() {
            return {
                isOpen: false,
                search: '',
                highlightedIndex: 0
            }
        },
        methods: {
            open() {
                if (this.isOpen) {
                    return;
                }
                this.isOpen = true;
                this.setUpPopper();
                this.$nextTick(() => {
                    this.$refs.searchField.focus();
                    this.scrollToHighilighted();
                });
            },
            close() {
                if (!this.isOpen) {
                    return;
                }
                this.isOpen = false;
                this.highlightedIndex = 0;
                this.$refs.button.focus();
            },
            clearSearch() {
                this.search = '';
            },
            select(option) {
                this.$emit('input', option);
                this.close();
                this.clearSearch();
            },
            selectHighlighted() {
                this.select(this.filteredOptions[this.highlightedIndex]);
            },
            highlight(index) {
                this.highlightedIndex = index;

                if (this.highlightedIndex < 0) {
                    this.highlightedIndex = this.filteredOptions.length - 1;
                }

                if (this.highlightedIndex > this.filteredOptions.length - 1) {
                    this.highlightedIndex = 0;
                }
                this.scrollToHighilighted();
            },
            scrollToHighilighted() {
                this.$refs.options.children[this.highlightedIndex].scrollIntoView({block: 'nearest'});
            },
            highlightPrev() {
                this.highlight(this.highlightedIndex - 1);
            },
            highlightNext() {
                this.highlight(this.highlightedIndex + 1);
            },
            setUpPopper() {
                if (!this.popper) {
                    this.popper = new createPopper(this.$refs.button, this.$refs.dropdown, {
                        placement: 'bottom'
                    });
                } else {
                    this.popper.update();
                }
            }
        },
        beforeDestroy() {
            if (this.popper) {
                this.popper.destroy();
            }
        },
        computed: {
            filteredOptions() {
                return  this.filterFunction(this.options, this.search);
            }
        },
        components: {
            OnClickOutside
        }
    }
</script>

<style lang="scss">

    .search-select-dropdown {
        width: 100%;
    }

</style>