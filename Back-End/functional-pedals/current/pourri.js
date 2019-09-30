
/*
Code generated with Faust version 2.17.13
Compilation options: -lang wasm-ib -scal -ftz 2
*/

function getJSONpourri() {
	return "{\"name\": \"Blipper2\",\"filename\": \"pourri.dsp\",\"version\": \"2.17.13\",\"compile_options\": \"-lang wasm-ib -scal -ftz 2\",\"library_list\": [\"/usr/local/share/faust/stdfaust.lib\",\"/usr/local/share/faust/basics.lib\",\"/usr/local/share/faust/maths.lib\",\"/usr/local/share/faust/signals.lib\",\"/usr/local/share/faust/oscillators.lib\",\"/usr/local/share/faust/analyzers.lib\",\"/usr/local/share/faust/filters.lib\"],\"include_pathnames\": [\"/usr/local/share/faust\",\"/usr/local/share/faust\",\"/usr/share/faust\",\".\",\"/tmp/sessions/E3FE4C663AFCF8902E89E46E8C8CFE42C63F2315/web/wap\"],\"size\": \"16528\",\"inputs\": \"2\",\"outputs\": \"2\",\"meta\": [ { \"analyzers.lib/name\": \"Faust Analyzer Library\" },{ \"analyzers.lib/version\": \"0.0\" },{ \"author\": \"Oli Larkin (contact@olilarkin.co.uk)\" },{ \"basics.lib/name\": \"Faust Basic Element Library\" },{ \"basics.lib/version\": \"0.0\" },{ \"copyright\": \"Oliver Larkin\" },{ \"description\": \"Envelope Follower controlling pitch of a triangle oscillator, good with percussive input\" },{ \"filename\": \"pourri.dsp\" },{ \"filters.lib/name\": \"Faust Filters Library\" },{ \"filters.lib/version\": \"0.0\" },{ \"licence\": \"GPL\" },{ \"maths.lib/author\": \"GRAME\" },{ \"maths.lib/copyright\": \"GRAME\" },{ \"maths.lib/license\": \"LGPL with exception\" },{ \"maths.lib/name\": \"Faust Math Library\" },{ \"maths.lib/version\": \"2.1\" },{ \"name\": \"Blipper2\" },{ \"oscillators.lib/name\": \"Faust Oscillator Library\" },{ \"oscillators.lib/version\": \"0.0\" },{ \"signals.lib/name\": \"Faust Signal Routing Library\" },{ \"signals.lib/version\": \"0.0\" },{ \"version\": \"0.2\" }],\"ui\": [ {\"type\": \"vgroup\",\"label\": \"Blipper2\",\"items\": [ {\"type\": \"hslider\",\"label\": \"BasePitch\",\"address\": \"/Blipper2/BasePitch\",\"index\": \"80\",\"meta\": [{ \"OWL\": \"PARAMETER_A\" },{ \"unit\": \"semitones\" }],\"init\": \"60\",\"min\": \"24\",\"max\": \"96\",\"step\": \"0.1\"},{\"type\": \"hslider\",\"label\": \"Mix\",\"address\": \"/Blipper2/Mix\",\"index\": \"20\",\"meta\": [{ \"OWL\": \"PARAMETER_D\" }],\"init\": \"0.5\",\"min\": \"0\",\"max\": \"1\",\"step\": \"0.01\"},{\"type\": \"hslider\",\"label\": \"PitchMod\",\"address\": \"/Blipper2/PitchMod\",\"index\": \"92\",\"meta\": [{ \"OWL\": \"PARAMETER_B\" },{ \"unit\": \"semitones\" }],\"init\": \"24\",\"min\": \"-64\",\"max\": \"64\",\"step\": \"1\"},{\"type\": \"hslider\",\"label\": \"Release\",\"address\": \"/Blipper2/Release\",\"index\": \"48\",\"meta\": [{ \"OWL\": \"PARAMETER_C\" },{ \"unit\": \"ms\" }],\"init\": \"20\",\"min\": \"2\",\"max\": \"100\",\"step\": \"1\"},{\"type\": \"checkbox\",\"label\": \"bypass\",\"address\": \"/Blipper2/bypass\",\"index\": \"40\"}]}]}";
}
function getBase64Codepourri() { return "AGFzbQEAAAAB1oCAgAAQYAJ/fwBgBH9/f38AYAF9AX1gAX8Bf2ABfwF/YAJ/fwF9YAF/AX9gAn9/AGABfwBgAn9/AGACf38AYAF/AGACf38Bf2ACf38Bf2ACfX0BfWADf399AAKZgICAAAIDZW52BV9leHBmAAIDZW52BV9wb3dmAA4Dj4CAgAAOAAEDBAUGBwgJCgsMDQ8FjICAgAABAYSAgIAA7IeAgAAHuoGAgAAMB2NvbXB1dGUAAwxnZXROdW1JbnB1dHMABA1nZXROdW1PdXRwdXRzAAUNZ2V0UGFyYW1WYWx1ZQAGDWdldFNhbXBsZVJhdGUABwRpbml0AAgNaW5zdGFuY2VDbGVhcgAJEWluc3RhbmNlQ29uc3RhbnRzAAoMaW5zdGFuY2VJbml0AAsaaW5zdGFuY2VSZXNldFVzZXJJbnRlcmZhY2UADA1zZXRQYXJhbVZhbHVlAA8GbWVtb3J5AgAK3ZCAgAAOgoCAgAAAC6CJgIAAAgZ/G31BACEEQQAhBUEAIQZBACEHQwAAAAAhCkMAAAAAIQtDAAAAACEMQwAAAAAhDUMAAAAAIQ5DAAAAACEPQwAAAAAhEEEAIQhDAAAAACERQwAAAAAhEkMAAAAAIRNDAAAAACEUQwAAAAAhFUMAAAAAIRZDAAAAACEXQwAAAAAhGEMAAAAAIRlDAAAAACEaQwAAAAAhG0MAAAAAIRxDAAAAACEdQwAAAAAhHkMAAAAAIR9DAAAAACEgQQAhCUMAAAAAISFDAAAAACEiQwAAAAAhI0MAAAAAISQgAkEAaigCACEEIAJBBGooAgAhBSADQQBqKAIAIQYgA0EEaigCACEHQQAqAhBBACoCFJQhCkEAKgIoIQtDAACAPyALkyEMQwAAAABBACoCLEEAKgIsQ28SgzpBACoCMJSXlZMQACENQwAAgD8gDZMhDkEAKgJMQQAqAlCUIQ9BACoCEEEAKgJclCEQQQAhCANAAkBBAEEBNgIYIApBACoCDEEAKgIklJIhEUEAIBFDAAAAACARvEGAgID8B3EbOAIgIAQgCGoqAgAhEiAFIAhqKgIAIRMgDCASIBOSlIshFCAUIA1BACoCOJQgDiAUlJKXIRVBACAVQwAAAAAgFbxBgICA/AdxGzgCNEEAKgIMQQAqAkCUQQAqAhBBACoCNJSSIRZBACAWQwAAAAAgFrxBgICA/AdxGzgCPCAPQQAqAkhBACoCWJSSIRdBACAXQwAAAAAgF7xBgICA/AdxGzgCVCAQQQAqAgxBACoCZJSSIRhBACAYQwAAAAAgGLxBgICA/AdxGzgCYEMAAABAQ6uqqj1BACoCVEEAKgJgQQAqAjyUkkMAAIrCkpQQASEZQwAA3EMgGZRDc5e7QZchGkMAAKBBIBqLlyEbQQAgGzgCaEEAKgJ0QQAqAixBACoCbJSSIRwgHCAcjpMhHUEAIB1DAAAAACAdvEGAgID8B3EbOAJwQwAAAEBBACoCcJRDAACAv5JDAAAAQBABIR5BACAeOAJ4QQAoAhyyIB5BACoCfJOUIBuVIR9BhAFBACgCgAFB/x9xQQJ0aiAfOAIAQwAAAABDAOD/REEAKgKEgQEgGpWWlyEgICCoIQkgII4hIUN3vn8/QQAqAoyBAZRBACoCRCAfQYQBQQAoAoABIAlrQf8fcUECdGoqAgAgIUMAAIA/ICCTkpSTICAgIZNBhAFBACgCgAEgCUEBamtB/x9xQQJ0aioCAJSTlJIhIkEAICJDAAAAACAivEGAgID8B3EbOAKIgQFBACoCCEEAKgIgQQAqAjyUQQAqAoiBAZQgGZSUISMgCyAMQwAAgD9BACoCIJOUkiEkIAYgCGogIyASICSUkjgCACAHIAhqICMgEyAklJI4AgBBAEEAKAIYNgIcQQBBACoCIDgCJEEAQQAqAjQ4AjhBAEEAKgI8OAJAQQBBACoCVDgCWEEAQQAqAmA4AmRBAEEAKgJoOAJsQQBBACoCcDgCdEEAQQAqAng4AnxBAEEAKAKAAUEBajYCgAFBAEEAKgKIgQE4AoyBASAIQQRqIQggCEEEIAFsSARADAIMAQsLCwuFgICAAABBAg8LhYCAgAAAQQIPC4uAgIAAACAAIAFqKgIADwuIgICAAABBACgCAA8LjoCAgAAAIAAgARACIAAgARALC62EgIAAAQt/QQAhAUEAIQJBACEDQQAhBEEAIQVBACEGQQAhB0EAIQhBACEJQQAhCkEAIQtBACEBA0ACQEEYIAFBAnRqQQA2AgAgAUEBaiEBIAFBAkgEQAwCDAELCwtBACECA0ACQEEgIAJBAnRqQwAAAAA4AgAgAkEBaiECIAJBAkgEQAwCDAELCwtBACEDA0ACQEE0IANBAnRqQwAAAAA4AgAgA0EBaiEDIANBAkgEQAwCDAELCwtBACEEA0ACQEE8IARBAnRqQwAAAAA4AgAgBEEBaiEEIARBAkgEQAwCDAELCwtBACEFA0ACQEHUACAFQQJ0akMAAAAAOAIAIAVBAWohBSAFQQJIBEAMAgwBCwsLQQAhBgNAAkBB4AAgBkECdGpDAAAAADgCACAGQQFqIQYgBkECSARADAIMAQsLC0EAIQcDQAJAQegAIAdBAnRqQwAAAAA4AgAgB0EBaiEHIAdBAkgEQAwCDAELCwtBACEIA0ACQEHwACAIQQJ0akMAAAAAOAIAIAhBAWohCCAIQQJIBEAMAgwBCwsLQQAhCQNAAkBB+AAgCUECdGpDAAAAADgCACAJQQFqIQkgCUECSARADAIMAQsLC0EAQQA2AoABQQAhCgNAAkBBhAEgCkECdGpDAAAAADgCACAKQQFqIQogCkGAIEgEQAwCDAELCwtBACELA0ACQEGIgQEgC0ECdGpDAAAAADgCACALQQFqIQsgC0ECSARADAIMAQsLCwuygYCAAABBACABNgIAQQBDAIA7SEMAAIA/QQAoAgCyl5Y4AgRBAEMAANxEQQAqAgSVOAIIQQBDAAAAAEMAAEhDQQAqAgSVkxAAOAIMQQBDAACAP0EAKgIMkzgCEEEAQwAAgD9BACoCBJU4AixBAEMAAIA+QQAqAgSUOAJEQQBDAAAAAEMAAMhCQQAqAgSVkxAAOAJIQQBDAACAP0EAKgJIkzgCTEEAQwAAAD9BACoCBJQ4AoSBAQuQgICAAAAgACABEAogABAMIAAQCQu0gICAAABBAEMAAAA/OAIUQQBDAAAAADgCKEEAQwAAoEE4AjBBAEMAAHBCOAJQQQBDAADAQTgCXAuNgICAAAAgASAAIAAgAUgbDwuNgICAAAAgACABIAAgAUgbDwuMgICAAAAgACABaiACOAIACwvskoCAAAEAQQAL5RJ7Im5hbWUiOiAiQmxpcHBlcjIiLCJmaWxlbmFtZSI6ICJwb3VycmkuZHNwIiwidmVyc2lvbiI6ICIyLjE3LjEzIiwiY29tcGlsZV9vcHRpb25zIjogIi1sYW5nIHdhc20taWIgLXNjYWwgLWZ0eiAyIiwibGlicmFyeV9saXN0IjogWyIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L3N0ZGZhdXN0LmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvYmFzaWNzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvbWF0aHMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9zaWduYWxzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3Qvb3NjaWxsYXRvcnMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9hbmFseXplcnMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9maWx0ZXJzLmxpYiJdLCJpbmNsdWRlX3BhdGhuYW1lcyI6IFsiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdCIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QiLCIvdXNyL3NoYXJlL2ZhdXN0IiwiLiIsIi90bXAvc2Vzc2lvbnMvRTNGRTRDNjYzQUZDRjg5MDJFODlFNDZFOEM4Q0ZFNDJDNjNGMjMxNS93ZWIvd2FwIl0sInNpemUiOiAiMTY1MjgiLCJpbnB1dHMiOiAiMiIsIm91dHB1dHMiOiAiMiIsIm1ldGEiOiBbIHsgImFuYWx5emVycy5saWIvbmFtZSI6ICJGYXVzdCBBbmFseXplciBMaWJyYXJ5IiB9LHsgImFuYWx5emVycy5saWIvdmVyc2lvbiI6ICIwLjAiIH0seyAiYXV0aG9yIjogIk9saSBMYXJraW4gKGNvbnRhY3RAb2xpbGFya2luLmNvLnVrKSIgfSx7ICJiYXNpY3MubGliL25hbWUiOiAiRmF1c3QgQmFzaWMgRWxlbWVudCBMaWJyYXJ5IiB9LHsgImJhc2ljcy5saWIvdmVyc2lvbiI6ICIwLjAiIH0seyAiY29weXJpZ2h0IjogIk9saXZlciBMYXJraW4iIH0seyAiZGVzY3JpcHRpb24iOiAiRW52ZWxvcGUgRm9sbG93ZXIgY29udHJvbGxpbmcgcGl0Y2ggb2YgYSB0cmlhbmdsZSBvc2NpbGxhdG9yLCBnb29kIHdpdGggcGVyY3Vzc2l2ZSBpbnB1dCIgfSx7ICJmaWxlbmFtZSI6ICJwb3VycmkuZHNwIiB9LHsgImZpbHRlcnMubGliL25hbWUiOiAiRmF1c3QgRmlsdGVycyBMaWJyYXJ5IiB9LHsgImZpbHRlcnMubGliL3ZlcnNpb24iOiAiMC4wIiB9LHsgImxpY2VuY2UiOiAiR1BMIiB9LHsgIm1hdGhzLmxpYi9hdXRob3IiOiAiR1JBTUUiIH0seyAibWF0aHMubGliL2NvcHlyaWdodCI6ICJHUkFNRSIgfSx7ICJtYXRocy5saWIvbGljZW5zZSI6ICJMR1BMIHdpdGggZXhjZXB0aW9uIiB9LHsgIm1hdGhzLmxpYi9uYW1lIjogIkZhdXN0IE1hdGggTGlicmFyeSIgfSx7ICJtYXRocy5saWIvdmVyc2lvbiI6ICIyLjEiIH0seyAibmFtZSI6ICJCbGlwcGVyMiIgfSx7ICJvc2NpbGxhdG9ycy5saWIvbmFtZSI6ICJGYXVzdCBPc2NpbGxhdG9yIExpYnJhcnkiIH0seyAib3NjaWxsYXRvcnMubGliL3ZlcnNpb24iOiAiMC4wIiB9LHsgInNpZ25hbHMubGliL25hbWUiOiAiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSIgfSx7ICJzaWduYWxzLmxpYi92ZXJzaW9uIjogIjAuMCIgfSx7ICJ2ZXJzaW9uIjogIjAuMiIgfV0sInVpIjogWyB7InR5cGUiOiAidmdyb3VwIiwibGFiZWwiOiAiQmxpcHBlcjIiLCJpdGVtcyI6IFsgeyJ0eXBlIjogImhzbGlkZXIiLCJsYWJlbCI6ICJCYXNlUGl0Y2giLCJhZGRyZXNzIjogIi9CbGlwcGVyMi9CYXNlUGl0Y2giLCJpbmRleCI6ICI4MCIsIm1ldGEiOiBbeyAiT1dMIjogIlBBUkFNRVRFUl9BIiB9LHsgInVuaXQiOiAic2VtaXRvbmVzIiB9XSwiaW5pdCI6ICI2MCIsIm1pbiI6ICIyNCIsIm1heCI6ICI5NiIsInN0ZXAiOiAiMC4xIn0seyJ0eXBlIjogImhzbGlkZXIiLCJsYWJlbCI6ICJNaXgiLCJhZGRyZXNzIjogIi9CbGlwcGVyMi9NaXgiLCJpbmRleCI6ICIyMCIsIm1ldGEiOiBbeyAiT1dMIjogIlBBUkFNRVRFUl9EIiB9XSwiaW5pdCI6ICIwLjUiLCJtaW4iOiAiMCIsIm1heCI6ICIxIiwic3RlcCI6ICIwLjAxIn0seyJ0eXBlIjogImhzbGlkZXIiLCJsYWJlbCI6ICJQaXRjaE1vZCIsImFkZHJlc3MiOiAiL0JsaXBwZXIyL1BpdGNoTW9kIiwiaW5kZXgiOiAiOTIiLCJtZXRhIjogW3sgIk9XTCI6ICJQQVJBTUVURVJfQiIgfSx7ICJ1bml0IjogInNlbWl0b25lcyIgfV0sImluaXQiOiAiMjQiLCJtaW4iOiAiLTY0IiwibWF4IjogIjY0Iiwic3RlcCI6ICIxIn0seyJ0eXBlIjogImhzbGlkZXIiLCJsYWJlbCI6ICJSZWxlYXNlIiwiYWRkcmVzcyI6ICIvQmxpcHBlcjIvUmVsZWFzZSIsImluZGV4IjogIjQ4IiwibWV0YSI6IFt7ICJPV0wiOiAiUEFSQU1FVEVSX0MiIH0seyAidW5pdCI6ICJtcyIgfV0sImluaXQiOiAiMjAiLCJtaW4iOiAiMiIsIm1heCI6ICIxMDAiLCJzdGVwIjogIjEifSx7InR5cGUiOiAiY2hlY2tib3giLCJsYWJlbCI6ICJieXBhc3MiLCJhZGRyZXNzIjogIi9CbGlwcGVyMi9ieXBhc3MiLCJpbmRleCI6ICI0MCJ9XX1dfQ=="; }

/*
 faust2wasm: GRAME 2017-2019
*/

'use strict';

if (typeof (AudioWorkletNode) === "undefined") {
	alert("AudioWorklet is not supported in this browser !")
}

class pourriNode extends AudioWorkletNode {

    constructor(context, baseURL, options)
    {
        super(context, 'pourri', options);
        
        this.baseURL = baseURL;
        this.json = options.processorOptions.json;
        this.json_object = JSON.parse(this.json);
     
        // JSON parsing functions
        this.parse_ui = function(ui, obj)
        {
            for (var i = 0; i < ui.length; i++) {
                this.parse_group(ui[i], obj);
            }
        }

        this.parse_group = function(group, obj)
        {
            if (group.items) {
                this.parse_items(group.items, obj);
            }
        }

        this.parse_items = function(items, obj)
        {
            for (var i = 0; i < items.length; i++) {
            	this.parse_item(items[i], obj);
            }
        }

        this.parse_item = function(item, obj)
        {
            if (item.type === "vgroup"
                || item.type === "hgroup"
                || item.type === "tgroup") {
                this.parse_items(item.items, obj);
            } else if (item.type === "hbargraph"
                       || item.type === "vbargraph") {
                // Keep bargraph adresses
                obj.outputs_items.push(item.address);
            } else if (item.type === "vslider"
                       || item.type === "hslider"
                       || item.type === "button"
                       || item.type === "checkbox"
                       || item.type === "nentry") {
                // Keep inputs adresses
                obj.inputs_items.push(item.address);
                obj.descriptor.push(item);
                // Decode MIDI
                if (item.meta !== undefined) {
                    for (var i = 0; i < item.meta.length; i++) {
                        if (item.meta[i].midi !== undefined) {
                            if (item.meta[i].midi.trim() === "pitchwheel") {
                                obj.fPitchwheelLabel.push(item.address);
                            } else if (item.meta[i].midi.trim().split(" ")[0] === "ctrl") {
                                obj.fCtrlLabel[parseInt(item.meta[i].midi.trim().split(" ")[1])]
                                .push({ path:item.address,
                                      min:parseFloat(item.min),
                                      max:parseFloat(item.max) });
                            }
                        }
                    }
                }      
                // Define setXXX/getXXX, replacing '/c' with 'C' everywhere in the string
                var set_name = "set" + item.address;
                var get_name = "get" + item.address;
                set_name = set_name.replace(/\/./g, (x) => { return x.substr(1,1).toUpperCase(); });     
                get_name = get_name.replace(/\/./g, (x) => { return x.substr(1,1).toUpperCase(); });
                obj[set_name] = (val) => { obj.setParamValue(item.address, val); };
                obj[get_name] = () => { return obj.getParamValue(item.address); };
                //console.log(set_name);
                //console.log(get_name);
            }
        }

        this.output_handler = null;

        // input/output items
        this.inputs_items = [];
        this.outputs_items = [];
        this.descriptor = [];
        
        // MIDI
        this.fPitchwheelLabel = [];
        this.fCtrlLabel = new Array(128);
        for (var i = 0; i < this.fCtrlLabel.length; i++) { this.fCtrlLabel[i] = []; }

        // Parse UI
        this.parse_ui(this.json_object.ui, this);

        // Set message handler
        this.port.onmessage = this.handleMessage.bind(this);
    }

    // To be called by the message port with messages coming from the processor
    handleMessage(event)
    {
        var msg = event.data;
        if (this.output_handler) {
            this.output_handler(msg.path, msg.value);
        }
    }

    // Public API

    /**
     *  Returns a full JSON description of the DSP.
     */
    getJSON()
    {
        return this.json;
    }
    
    // For WAP
    async getMetadata() 
    {
        return new Promise(resolve => {
            let real_url = (this.baseURL === "") ? "main.json" : (this.baseURL + "/main.json");
            fetch(real_url).then(responseJSON => {
            	return responseJSON.json();
        	}).then(json => {
        		resolve(json);
        	})
    	});
    }

    /**
     *  Set the control value at a given path.
     *
     * @param path - a path to the control
     * @param val - the value to be set
     */
    setParamValue(path, val)
    {
        // Needed for sample accurate control
        this.parameters.get(path).setValueAtTime(val, 0);
    }
    
    // For WAP
    setParam(path, val)
    {
        // Needed for sample accurate control
        this.parameters.get(path).setValueAtTime(val, 0);
    }

    /**
     *  Get the control value at a given path.
     *
     * @return the current control value
     */
    getParamValue(path)
    {
        return this.parameters.get(path).value;
    }
    
    // For WAP
    getParam(path) 
    {
        return this.parameters.get(path).value;
    }

    /**
     * Setup a control output handler with a function of type (path, value)
     * to be used on each generated output value. This handler will be called
     * each audio cycle at the end of the 'compute' method.
     *
     * @param handler - a function of type function(path, value)
     */
    setOutputParamHandler(handler)
    {
        this.output_handler = handler;
    }

    /**
     * Get the current output handler.
     */
    getOutputParamHandler()
    {
        return this.output_handler;
    }

    getNumInputs()
    {
        return parseInt(this.json_object.inputs);
    }

    getNumOutputs()
    {
        return parseInt(this.json_object.outputs);
    }
    
    // For WAP
    inputChannelCount() 
    {
        return parseInt(this.json_object.inputs);
    }

    outputChannelCount() 
    {
        return parseInt(this.json_object.outputs);
    }

    /**
     * Returns an array of all input paths (to be used with setParamValue/getParamValue)
     */
    getParams()
    {
        return this.inputs_items;
    }
    
    // For WAP
    getDescriptor() 
    {
        var desc = {};
        for (const item in this.descriptor) {
            if (this.descriptor.hasOwnProperty(item)) {
                if (this.descriptor[item].label != "bypass") {
                    desc = Object.assign({ [this.descriptor[item].label]: { minValue: this.descriptor[item].min, maxValue: this.descriptor[item].max, defaultValue: this.descriptor[item].init } }, desc);
                }
            }
        }
        return desc;
    }

    /**
     * Control change
     *
     * @param channel - the MIDI channel (0..15, not used for now)
     * @param ctrl - the MIDI controller number (0..127)
     * @param value - the MIDI controller value (0..127)
     */
    ctrlChange(channel, ctrl, value)
    {
        if (this.fCtrlLabel[ctrl] !== []) {
            for (var i = 0; i < this.fCtrlLabel[ctrl].length; i++) {
                var path = this.fCtrlLabel[ctrl][i].path;
                this.setParamValue(path, pourriNode.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
                if (this.output_handler) {
                    this.output_handler(path, this.getParamValue(path));
                }
            }
        }
    }

    /**
     * PitchWeel
     *
     * @param channel - the MIDI channel (0..15, not used for now)
     * @param value - the MIDI controller value (-1..1)
     */
    pitchWheel(channel, wheel)
    {
        for (var i = 0; i < this.fPitchwheelLabel.length; i++) {
            var path = this.fPitchwheelLabel[i];
            this.setParamValue(path, Math.pow(2.0, wheel/12.0));
            if (this.output_handler) {
                this.output_handler(path, this.getParamValue(path));
            }
        }
    }

    /**
     * Generic MIDI message handler.
     */
    midiMessage(data)
    {
        var cmd = data[0] >> 4;
        var channel = data[0] & 0xf;
        var data1 = data[1];
        var data2 = data[2];
        
        if (channel === 9) {
            return;
        } else if (cmd === 11) {
            this.ctrlChange(channel, data1, data2);
        } else if (cmd === 14) {
            this.pitchWheel(channel, ((data2 * 128.0 + data1)-8192)/8192.0);
        }
    }
    
    // For WAP
    onMidi(data) 
    {
     	midiMessage(data);
    }
    
    /**
     * @returns {Object} describes the path for each available param and its current value
     */
    async getState() 
    {
        var params = new Object();
        for (let i = 0; i < this.getParams().length; i++) {
            Object.assign(params, { [this.getParams()[i]]: `${this.getParam(this.getParams()[i])}` });
        }
        return new Promise(resolve => { resolve(params) });
    }

    /**
     * Sets each params with the value indicated in the state object
     * @param {Object} state 
     */
    async setState(state) 
    {
        return new Promise(resolve => {
            for (const param in state) {
                if (state.hasOwnProperty(param)) this.setParam(param, state[param]);
            }
            try {
                this.gui.setAttribute('state', JSON.stringify(state));
            } catch (error) {
                console.warn("Plugin without gui or GUI not defined", error);
            }
            resolve(state);
        })
    }
    
    /**
     * A different call closer to the preset management
     * @param {Object} patch to assign as a preset to the node
     */
    setPatch(patch) 
    {
        this.setState(this.presets[patch])
    }
    
    static remap(v, mn0, mx0, mn1, mx1)
    {
        return (1.0 * (v - mn0) / (mx0 - mn0)) * (mx1 - mn1) + mn1;
    }
    
}

// Factory class
class pourri {

    /**
     * Factory constructor.
     *
     * @param context - the audio context
     * @param baseURL - the baseURL of the plugin folder
     */
    constructor(context, baseURL = "")
    {
    	console.log("baseLatency " + context.baseLatency);
    	console.log("outputLatency " + context.outputLatency);
    	console.log("sampleRate " + context.sampleRate);
    	
        this.context = context;
        this.baseURL = baseURL;
        this.pathTable = [];
    }

    heap2Str(buf)
    {
        let str = "";
        let i = 0;
        while (buf[i] !== 0) {
            str += String.fromCharCode(buf[i++]);
        }
        return str;
    }
    
    /**
     * Load additionnal resources to prepare the custom AudioWorkletNode. Returns a promise to be used with the created node.
     */
    async load()
    {
        try {
            const importObject = {
                env: {
                    memoryBase: 0,
                    tableBase: 0,
                    _abs: Math.abs,
                        
                    // Float version
                    _acosf: Math.acos,
                    _asinf: Math.asin,
                    _atanf: Math.atan,
                    _atan2f: Math.atan2,
                    _ceilf: Math.ceil,
                    _cosf: Math.cos,
                    _expf: Math.exp,
                    _floorf: Math.floor,
                    _fmodf: (x, y) => x % y,
                    _logf: Math.log,
                    _log10f: Math.log10,
                    _max_f: Math.max,
                    _min_f: Math.min,
                    _remainderf: (x, y) => x - Math.round(x / y) * y,
                    _powf: Math.pow,
                    _roundf: Math.fround,
                    _sinf: Math.sin,
                    _sqrtf: Math.sqrt,
                    _tanf: Math.tan,
                    _acoshf: Math.acosh,
                    _asinhf: Math.asinh,
                    _atanhf: Math.atanh,
                    _coshf: Math.cosh,
                    _sinhf: Math.sinh,
                    _tanhf: Math.tanh,
                        
                    // Double version
                    _acos: Math.acos,
                    _asin: Math.asin,
                    _atan: Math.atan,
                    _atan2: Math.atan2,
                    _ceil: Math.ceil,
                    _cos: Math.cos,
                    _exp: Math.exp,
                    _floor: Math.floor,
                    _fmod: (x, y) => x % y,
                    _log: Math.log,
                    _log10: Math.log10,
                    _max_: Math.max,
                    _min_: Math.min,
                    _remainder: (x, y) => x - Math.round(x / y) * y,
                    _pow: Math.pow,
                    _round: Math.fround,
                    _sin: Math.sin,
                    _sqrt: Math.sqrt,
                    _tan: Math.tan,
                    _acosh: Math.acosh,
                    _asinh: Math.asinh,
                    _atanh: Math.atanh,
                    _cosh: Math.cosh,
                    _sinh: Math.sinh,
                    _tanh: Math.tanh,
                        
                    table: new WebAssembly.Table({ initial: 0, element: "anyfunc" })
                }
            };

            let real_url = (this.baseURL === "") ? "pourri.wasm" : (this.baseURL + "/pourri.wasm");
            const dspFile = await fetch(real_url);
            const dspBuffer = await dspFile.arrayBuffer();
            const dspModule = await WebAssembly.compile(dspBuffer);
            const dspInstance = await WebAssembly.instantiate(dspModule, importObject);
            
            return new Promise((resolve, reject) => {   
            
                let HEAPU8 = new Uint8Array(dspInstance.exports.memory.buffer);
                let json = this.heap2Str(HEAPU8);
                let json_object = JSON.parse(json);  
                let options = { wasm_module: dspModule, json: json };
                
                let re = /JSON_STR/g;
                let pourriProcessorString1 = pourriProcessorString.replace(re, json);
                let real_url = window.URL.createObjectURL(new Blob([pourriProcessorString1], { type: 'text/javascript' }));
                
                this.context.audioWorklet.addModule(real_url).then(() => {
                    this.node = new pourriNode(this.context, this.baseURL, 
                                        { numberOfInputs: (parseInt(json_object.inputs) > 0) ? 1 : 0,
                                        numberOfOutputs: (parseInt(json_object.outputs) > 0) ? 1 : 0,
                                        channelCount: Math.max(1, parseInt(json_object.inputs)),
                                        outputChannelCount: [parseInt(json_object.outputs)],
                                        channelCountMode: "explicit",
                                        channelInterpretation: "speakers",
                                        processorOptions: options });
                    this.node.onprocessorerror = () => { console.log('An error from pourri-processor was detected.');}
                    return (this.node);
                }).then((node) => {
                    resolve(node);
                }).catch((e) => {
                    reject(e);
                });
            });
            
        } catch (e) {
            this.error(e);
            this.error("Faust " + this.name + " cannot be loaded or compiled");
            return null;
        }
    	
    }
    
    async loadGui()
    {
        return new Promise((resolve, reject) => {
            try {
                // DO THIS ONLY ONCE. If another instance has already been added, do not add the html file again
                let real_url = (this.baseURL === "") ? "main.html" : (this.baseURL + "/main.html");
                if (!this.linkExists(real_url)) {
                    // LINK DOES NOT EXIST, let's add it to the document
                    var link = document.createElement('link');
                    link.rel = 'import';
                    link.href = real_url;
                    document.head.appendChild(link);
                    link.onload = (e) => {
                        // the file has been loaded, instanciate GUI
                        // and get back the HTML elem
                        // HERE WE COULD REMOVE THE HARD CODED NAME
                        var element = createpourriGUI(this.node);
                        resolve(element);
                    }
                } else {
                    // LINK EXIST, WE AT LEAST CREATED ONE INSTANCE PREVIOUSLY
                    // so we can create another instance
                    var element = createpourriGUI(this.node);
                    resolve(element);
                }
            } catch (e) {
                console.log(e);
                reject(e);
            }
        });
    };

	linkExists(url) 
	{
    	return document.querySelectorAll(`link[href="${url}"]`).length > 0;
   	}

}

// Template string for AudioWorkletProcessor

let pourriProcessorString = `

    'use strict';

    // Monophonic Faust DSP
    class pourriProcessor extends AudioWorkletProcessor {
        
        // JSON parsing functions
        static parse_ui(ui, obj, callback)
        {
            for (var i = 0; i < ui.length; i++) {
                pourriProcessor.parse_group(ui[i], obj, callback);
            }
        }
        
        static parse_group(group, obj, callback)
        {
            if (group.items) {
                pourriProcessor.parse_items(group.items, obj, callback);
            }
        }
        
        static parse_items(items, obj, callback)
        {
            for (var i = 0; i < items.length; i++) {
                callback(items[i], obj, callback);
            }
        }
        
        static parse_item1(item, obj, callback)
        {
            if (item.type === "vgroup"
                || item.type === "hgroup"
                || item.type === "tgroup") {
                pourriProcessor.parse_items(item.items, obj, callback);
            } else if (item.type === "hbargraph"
                       || item.type === "vbargraph") {
                // Nothing
            } else if (item.type === "vslider"
                       || item.type === "hslider"
                       || item.type === "button"
                       || item.type === "checkbox"
                       || item.type === "nentry") {
                obj.push({ name: item.address,
                         defaultValue: item.init,
                         minValue: item.min,
                         maxValue: item.max });
            }
        }
        
        static parse_item2(item, obj, callback)
        {
            if (item.type === "vgroup"
                || item.type === "hgroup"
                || item.type === "tgroup") {
                pourriProcessor.parse_items(item.items, obj, callback);
            } else if (item.type === "hbargraph"
                       || item.type === "vbargraph") {
                // Keep bargraph adresses
                obj.outputs_items.push(item.address);
                obj.pathTable[item.address] = parseInt(item.index);
            } else if (item.type === "vslider"
                       || item.type === "hslider"
                       || item.type === "button"
                       || item.type === "checkbox"
                       || item.type === "nentry") {
                // Keep inputs adresses
                obj.inputs_items.push(item.address);
                obj.pathTable[item.address] = parseInt(item.index);
            }
        }
     
        static get parameterDescriptors() 
        {
            // Analyse JSON to generate AudioParam parameters
            var params = [];
            pourriProcessor.parse_ui(JSON.parse(\`JSON_STR\`).ui, params, pourriProcessor.parse_item1);
            return params;
        }
       
        constructor(options)
        {
            super(options);
            
            const importObject = {
                    env: {
                        memoryBase: 0,
                        tableBase: 0,

                        // Integer version
                        _abs: Math.abs,

                        // Float version
                        _acosf: Math.acos,
                        _asinf: Math.asin,
                        _atanf: Math.atan,
                        _atan2f: Math.atan2,
                        _ceilf: Math.ceil,
                        _cosf: Math.cos,
                        _expf: Math.exp,
                        _floorf: Math.floor,
                        _fmodf: function(x, y) { return x % y; },
                        _logf: Math.log,
                        _log10f: Math.log10,
                        _max_f: Math.max,
                        _min_f: Math.min,
                        _remainderf: function(x, y) { return x - Math.round(x/y) * y; },
                        _powf: Math.pow,
                        _roundf: Math.fround,
                        _sinf: Math.sin,
                        _sqrtf: Math.sqrt,
                        _tanf: Math.tan,

                        // Double version
                        _acos: Math.acos,
                        _asin: Math.asin,
                        _atan: Math.atan,
                        _atan2: Math.atan2,
                        _ceil: Math.ceil,
                        _cos: Math.cos,
                        _exp: Math.exp,
                        _floor: Math.floor,
                        _fmod: function(x, y) { return x % y; },
                        _log: Math.log,
                        _log10: Math.log10,
                        _max_: Math.max,
                        _min_: Math.min,
                        _remainder:function(x, y) { return x - Math.round(x/y) * y; },
                        _pow: Math.pow,
                        _round: Math.fround,
                        _sin: Math.sin,
                        _sqrt: Math.sqrt,
                        _tan: Math.tan,

                        table: new WebAssembly.Table({ initial: 0, element: 'anyfunc' })
                    }
            };
            
            this.pourri_instance = new WebAssembly.Instance(options.processorOptions.wasm_module, importObject);
            this.json_object = JSON.parse(options.processorOptions.json);
         
            this.output_handler = function(path, value) { this.port.postMessage({ path: path, value: value }); };
            
            this.ins = null;
            this.outs = null;

            this.dspInChannnels = [];
            this.dspOutChannnels = [];

            this.numIn = parseInt(this.json_object.inputs);
            this.numOut = parseInt(this.json_object.outputs);

            // Memory allocator
            this.ptr_size = 4;
            this.sample_size = 4;
            this.integer_size = 4;
            
            this.factory = this.pourri_instance.exports;
            this.HEAP = this.pourri_instance.exports.memory.buffer;
            this.HEAP32 = new Int32Array(this.HEAP);
            this.HEAPF32 = new Float32Array(this.HEAP);

            //console.log(this.HEAP);
            //console.log(this.HEAP32);
            //console.log(this.HEAPF32);

            // bargraph
            this.outputs_timer = 5;
            this.outputs_items = [];

            // input items
            this.inputs_items = [];
        
            // Start of HEAP index

            // DSP is placed first with index 0. Audio buffer start at the end of DSP.
            this.audio_heap_ptr = parseInt(this.json_object.size);

            // Setup pointers offset
            this.audio_heap_ptr_inputs = this.audio_heap_ptr;
            this.audio_heap_ptr_outputs = this.audio_heap_ptr_inputs + (this.numIn * this.ptr_size);

            // Setup buffer offset
            this.audio_heap_inputs = this.audio_heap_ptr_outputs + (this.numOut * this.ptr_size);
            this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * NUM_FRAMES * this.sample_size);
            
            // Start of DSP memory : DSP is placed first with index 0
            this.dsp = 0;

            this.pathTable = [];
         
            // Send output values to the AudioNode
            this.update_outputs = function ()
            {
                if (this.outputs_items.length > 0 && this.output_handler && this.outputs_timer-- === 0) {
                    this.outputs_timer = 5;
                    for (var i = 0; i < this.outputs_items.length; i++) {
                        this.output_handler(this.outputs_items[i], this.HEAPF32[this.pathTable[this.outputs_items[i]] >> 2]);
                    }
                }
            }
            
            this.initAux = function ()
            {
                var i;
                
                if (this.numIn > 0) {
                    this.ins = this.audio_heap_ptr_inputs;
                    for (i = 0; i < this.numIn; i++) {
                        this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((NUM_FRAMES * this.sample_size) * i);
                    }
                    
                    // Prepare Ins buffer tables
                    var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                    for (i = 0; i < this.numIn; i++) {
                        this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + NUM_FRAMES * this.sample_size) >> 2);
                    }
                }
                
                if (this.numOut > 0) {
                    this.outs = this.audio_heap_ptr_outputs;
                    for (i = 0; i < this.numOut; i++) {
                        this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((NUM_FRAMES * this.sample_size) * i);
                    }
                    
                    // Prepare Out buffer tables
                    var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                    for (i = 0; i < this.numOut; i++) {
                        this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + NUM_FRAMES * this.sample_size) >> 2);
                    }
                }
                
                // Parse UI
                pourriProcessor.parse_ui(this.json_object.ui, this, pourriProcessor.parse_item2);
                
                // Init DSP
                this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
            }

            this.setParamValue = function (path, val)
            {
                this.HEAPF32[this.pathTable[path]] = val;
            }

            this.getParamValue = function (path)
            {
                return this.HEAPF32[this.pathTable[path]];
            }

            // Init resulting DSP
            this.initAux();
            
            console.log(this);
        }
        
        process(inputs, outputs, parameters) 
        {
            var input = inputs[0];
            var output = outputs[0];
            
            // Check inputs
            if (this.numIn > 0 && ((input === undefined) || (input[0].length === 0))) {
                //console.log("Process input error");
                return true;
            }
            // Check outputs
            if (this.numOut > 0 && ((output === undefined) || (output[0].length === 0))) {
                //console.log("Process output error");
                return true;
            }
            
            // Copy inputs
            if (input !== undefined) {
                for (var chan = 0; chan < Math.min(this.numIn, input.length) ; ++chan) {
                    var dspInput = this.dspInChannnels[chan];
                    dspInput.set(input[chan]);
                }
            }
            
            /*
            TODO: sample accurate control change is not yet handled
            When no automation occurs, params[i][1] has a length of 1,
            otherwise params[i][1] has a length of NUM_FRAMES with possible control change each sample
            */
            
            // Update controls
            var params = Object.entries(parameters);
            for (var i = 0; i < params.length; i++) {
                this.HEAPF32[this.pathTable[params[i][0]] >> 2] = params[i][1][0];
            }
            
            // Compute
            this.factory.compute(this.dsp, NUM_FRAMES, this.ins, this.outs);
            
            // Update bargraph
            this.update_outputs();
            
            // Copy outputs
            if (output !== undefined) {
                for (var chan = 0; chan < Math.min(this.numOut, output.length); ++chan) {
                    var dspOutput = this.dspOutChannnels[chan];
                    output[chan].set(dspOutput);
                }
            }
            
            return true;
        }
    }

    // Globals
    const NUM_FRAMES = 128;
    registerProcessor('pourri', pourriProcessor);
`;

// WAP factory or npm package module
if (typeof module === "undefined") {
    window.pourri = pourri;
    window.Faustpourri = pourri;
} else {
    module.exports = { pourri };
}
