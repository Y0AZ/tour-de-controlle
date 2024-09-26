import sys, io, os
buffer = io.StringIO()
sys.stdout = sys.stderr = buffer

import eel
import webview
import threading
from sensormodel.simulated_system import *



def start_gui():
        eel.init(f"{os.path.dirname(os.path.realpath(__file__))}/webpage")
        eel.start('monitor.html', mode=None)

@eel.expose
def close_gui():
        window.destroy()

tank1 = Tank()
tank2 = Tank()
tank3 = Tank()

@eel.expose
def get_tank_data():
        return {"tank1": [tank1.getlevel, tank1.getpH, tank1.gettemp],
                "tank2": [tank2.getlevel, tank2.getpH, tank2.gettemp],
                "tank3": [tank3.getlevel, tank3.getpH, tank3.gettemp]}



gui_thread = threading.Thread(target=start_gui)
gui_thread.daemon = True
gui_thread.start()

window = webview.create_window('Water monitoring dashboard', 'http://localhost:8000/monitor.html', frameless=True, width=1200, height=800)
webview.start()