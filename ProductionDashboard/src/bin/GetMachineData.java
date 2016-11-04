/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package bin;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.json.JSONObject;

/**
 *
 * @author AModotti
 */
public class GetMachineData extends HttpServlet {

    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	/**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        
        PrintWriter out = response.getWriter();
        
        try {
            
            Connection conn = null;
            PreparedStatement ps = null;
            ResultSet rs = null;
            String sql = "";
            String reparto = "";
            String machine = "";
            String machinedescription = "";
            String state = "";
            String job = "";
            String jobdescription = "";
            String wo = "";
            String phase = "";
            String phasedescription = "";
            String timestamp = "";
            String workcenter = "";
            String workcenterdescription = "";
            String operator = "";
            String operatordescription = "";
            String info = "";
            String colore = "";
            String sfondo = "";
            String testo = "";
            String stato = "";
            String centro = "";
            String descrizionecentro = "";
            
            
            Boolean empty = true;

            JSONObject dati = new JSONObject();

            sql = "   SELECT ABAN8,"
                + "          TRIM(ABALPH),"
                + "          USYQ10USST,"                
                + "          TRIM(WALITM),"
                + "          TRIM(IMDSC1),"
                + "          WLDOCO,"
                + "          WLOPSQ,"
                + "          TRIM(WLDSC1),"
                + "          TO_CHAR((CAST((FROM_TZ(CAST(TO_DATE(TO_CHAR(USDTUP,'DD/MM/YYYY HH24.MI.SS'),'DD/MM/YYYY HH24.MI.SS') AS TIMESTAMP),'GMT') AT TIME ZONE 'Europe/Rome') AS DATE)),'DD/MM/YYYY HH24.MI.SS')," 
                + "          TRIM(USISL),"
                + "          TRIM(ISALPH),"
                + "          USURAB,"
                + "          TRIM(USALPH1),"
                + "          TRIM(USMCU),"
                + "          TRIM(MCDL01),"
                + "          USDEPT "    
                + "     FROM F0101 "
                + "LEFT JOIN F55FQ10002 ON (ABAN8 = USAN8) "
                + "LEFT JOIN F55FQ10006 ON (USISL = ISUKID) "    
                + "LEFT JOIN F4801 ON (WADOCO = USDOCO) "
                + "LEFT JOIN F3112 ON (WLDOCO = USDOCO AND WLOPSQ = USOPSQ) "
                + "LEFT JOIN F0006 ON (MCMCU = USMCU) "
                + "LEFT JOIN F4101 ON (WAITM = IMITM) "
                + "    WHERE ABAT1 IN ('WC','E') "
                + "      AND USYQ10USST IN ('1','2','3','4','5') "                
                + " ORDER BY ABAN8,USYQ10USST ";

            try {

                Class.forName("oracle.jdbc.driver.OracleDriver").newInstance();
                conn = DriverManager.getConnection(Parameters.dbconnectionstring,Parameters.dbusername,Parameters.dbpassword);

                ps = conn.prepareStatement(sql);

                rs = ps.executeQuery();
                
                while (rs.next())
                {
                    empty = false;
                    JSONObject attributi = new JSONObject();
                                
                    machine = rs.getString(1);
                    machinedescription = rs.getString(2);
                    state = rs.getString(3);
                    job = rs.getString(4);
                    
                    if(job != null){
                        job = job.substring(0,9);
                    }else{
                        job = rs.getString(1);
                    }
                                        
                    jobdescription = rs.getString(5);                     
                    wo = rs.getString(6); 
                    phase = Integer.toString(rs.getInt(7)/100);
                    
                    phasedescription = rs.getString(8);
                    timestamp = rs.getString(9);
                    
                    workcenter = rs.getString(10);
                    workcenterdescription = rs.getString(11);
                    operator = rs.getString(12);
                    operatordescription = rs.getString(13);
                    stato = state;
                    centro = rs.getString(14);
                    
                    if (centro == null){
                        centro = "";
                    }
                                        
                    descrizionecentro = rs.getString(15);
                    
                    if (descrizionecentro == null){
                        descrizionecentro = "";
                    }
                    
                    reparto = rs.getString(16);

                    if(state.equals("1")){
                        
                        info = machine + " - " + machinedescription + "\n"
                             + workcenter + " - " + workcenterdescription + "\n"
                             + centro + " - " + descrizionecentro + "\n" 
                             + operator + " - " + operatordescription + "\n" 
                             + "MACCHINA FERMA CON OPERATORE ASSENTE" + "\n"   
                             + timestamp;
                        
                        colore = "white";
                        sfondo = "gray";
                        testo = machine;
                        
                    }else if(state.equals("2")){
                        
                        info = machine + " - " + machinedescription + "\n"
                             + workcenter + " - " + workcenterdescription + "\n" 
                             + centro + " - " + descrizionecentro + "\n"   
                             + operator + " - " + operatordescription + "\n" 
                             + "MACCHINA FERMA CON OPERATORE PRESENTE" + "\n"    
                             + timestamp;
                        
                        colore = "black";
                        sfondo = "red";
                        testo = machine;
                        
                    }else if(state.equals("3")){
                        
                        info = machine + " - " + machinedescription + "\n"
                             + workcenter + " - " + workcenterdescription + "\n" 
                             + centro + " - " + descrizionecentro + "\n"   
                             + operator + " - " + operatordescription + "\n"   
                             + job + " - " + jobdescription + "\n"
                             + wo + "/" + phase + " - " + phasedescription + "\n"
                             + "MACCHINA IN ATTREZZAGGIO" + "\n" 
                             + timestamp;
                        
                        colore = "black";
                        sfondo = "yellow";
                        testo = job;
                        
                    }else if(state.equals("4")){
                        
                        info = machine + " - " + machinedescription + "\n"
                             + workcenter + " - " + workcenterdescription + "\n"
                             + centro + " - " + descrizionecentro + "\n"   
                             + operator + " - " + operatordescription + "\n"   
                             + job + " - " + jobdescription + "\n"
                             + wo + "/" + phase + " - " + phasedescription + "\n"
                             + "MACCHINA IN LAVORAZIONE" + "\n"   
                             + timestamp;
                        
                        colore = "white";
                        sfondo = "green";
                        testo = job;
                        
                    }else if(state.equals("5")){
                        
                        info = machine + " - " + machinedescription + "\n"
                             + workcenter + " - " + workcenterdescription + "\n" 
                             + centro + " - " + descrizionecentro + "\n"   
                             + operator + " - " + operatordescription + "\n"   
                             + job + " - " + jobdescription + "\n"
                             + wo + "/" + phase + " - " + phasedescription + "\n"
                             + "MACCHINA IN SOSPENSIONE ATTIVITA' CON OPERATORE ASSENTE" + "\n"
                             + timestamp;
                        
                        colore = "white";
                        sfondo = "gray";
                        testo = job;
                        
                    }
                    
                    attributi.put("macchina",machine);
                    attributi.put("info",info);
                    attributi.put("colore",colore);
                    attributi.put("sfondo",sfondo);
                    attributi.put("testo",testo);
                    attributi.put("stato",stato);
                    attributi.put("centro",centro);
                    attributi.put("reparto",reparto);
                    dati.append("attributi",attributi);                             
                }
                               
                rs.close();
                ps.close();
                
                if(empty){
                    
                    dati.put("attributi", "");
                    
                }
                
                out.println(dati);
                
            }catch(Exception Ex) {

                out.print(Ex.getMessage());

            }finally{

                if (ps != null) {
                    try {
                        ps.close();
                    } catch (SQLException e) {
                        System.out.println(e.getMessage());
                    }
                }

                if (conn != null) {
                    try {
                        conn.close();
                    } catch (SQLException e) {
                        System.out.println(e.getMessage());
                    }
                }

            }
        } finally { 
            out.close();
        }
    }
    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */

    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
