/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {ChangeDetectorRef, Directive} from "@angular/core";
import {OompaLoompa} from "../../../utils/chocolate/oompa-loompa";
import {ExpandableRowsCount} from "../providers/global-expandable-rows";
import {DatagridWillyWonka} from "./datagrid-willy-wonka";

@Directive({selector: "clr-datagrid, clr-dg-row"})
export class ExpandableOompaLoompa extends OompaLoompa {
    constructor(cdr: ChangeDetectorRef, willyWonka: DatagridWillyWonka, private expandableCount: ExpandableRowsCount) {
        super(cdr, willyWonka);
    }

    get flavor() {
        return this.expandableCount.hasExpandableRow;
    }
}
