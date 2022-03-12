#! /bin/python3

from __future__ import unicode_literals

import uno
import unohelper  # PyUno itself
from msgbox import MsgBox  # LibreOffice shared module

COLOR_YELLOW = 0xFFFF00
COMPONENT = XSCRIPTCONTEXT.getDesktop().CurrentComponent
SHEET1 = COMPONENT.Sheets[0]
SHEET2 = COMPONENT.Sheets[1]


def Print(message, title="Message"):
    """
    Print a message inside Libre office
    """
    mb = MsgBox(XSCRIPTCONTEXT.getComponentContext())
    mb.addButton('Ok')
    mb.renderFromBoxSize(2450)
    mb.show(str(message), 0, title)


def _skip(sheet, component, select_next = False):
    selected_cell = component.CurrentController.getSelection().CellAddress
    cells_to_color = sheet.getCellRangeByPosition(selected_cell.Column, selected_cell.Row, selected_cell.Column+1, selected_cell.Row)
    component.CurrentController.select(cells_to_color)
    cells_to_color.CellBackColor = COLOR_YELLOW
    if select_next:
        first_next_cell = sheet.getCellByPosition(selected_cell.Column, selected_cell.Row+1)
        component.CurrentController.select(first_next_cell)
    else:
        first_next_cell = sheet.getCellByPosition(selected_cell.Column, selected_cell.Row)
        component.CurrentController.select(first_next_cell)


def skip():
    _skip(SHEET1, COMPONENT, select_next=True)

def _find_max_index(sheet):
    i = 2
    current = sheet.getCellByPosition(0, 1)
    _max = int(current.String)
    while current.String.isnumeric():
        if int(current.String) > _max:
            _max = int(current.String)
        i+=1
        current = sheet.getCellByPosition(0, i)
    return _max

def _add_copied_index_to_recipes(sheet, original_index, index):
    i = 1
    current = sheet.getCellByPosition(1, i)
    while "," in current.String or current.String.isnumeric():
        current = sheet.getCellByPosition(1, i)
        if "," not in current.String and not current.String.isnumeric():
            break
        indices = [int(x) for x in current.String.split(",")]
        if original_index in indices: 
            indices.append(index)
            current.setString(",".join((str(x) for x in indices)))
        i+=1


def _remove_index_from_recipes(sheet, index): 
    i = 1
    current = sheet.getCellByPosition(1, i)
    while "," in current.String or current.String.isnumeric():
        current = sheet.getCellByPosition(1, i)
        if "," not in current.String and not current.String.isnumeric():
            break
        indices = [int(x) for x in current.String.split(",")]
        if index in indices: 
            indices.remove(index)
            current.setString(",".join((str(x) for x in indices)))
        i+=1



def clone():
    selected_cell = COMPONENT.CurrentController.getSelection().CellAddress
    SHEET1.Rows.insertByIndex(selected_cell.Row,1)
    
    #Add a placeholder values, because an empty cell would cause the loop to stop
    SHEET1.getCellByPosition(selected_cell.Column, selected_cell.Row).setString(0)
    

    #copy old values into the current row
    SHEET1.getCellByPosition(selected_cell.Column+1, selected_cell.Row).setString(SHEET1.getCellByPosition(selected_cell.Column+1, selected_cell.Row+1).String)
    SHEET1.getCellByPosition(selected_cell.Column+2, selected_cell.Row).setString(f"##{SHEET1.getCellByPosition(selected_cell.Column+1, selected_cell.Row+1).String}")
    index = _find_max_index(SHEET1)+1
    original_index = int(SHEET1.getCellByPosition(selected_cell.Column, selected_cell.Row+1).String)
    SHEET1.getCellByPosition(selected_cell.Column, selected_cell.Row).setString(str(index))
    
    _add_copied_index_to_recipes(SHEET2, original_index, index)

def remove():
    selected_cell = COMPONENT.CurrentController.getSelection().CellAddress
    index = int(SHEET1.getCellByPosition(selected_cell.Column, selected_cell.Row).String)
    SHEET1.Rows.removeByIndex(selected_cell.Row,1)
    _remove_index_from_recipes(SHEET2, index)

#export macros
g_exportedScripts = skip, clone, remove,