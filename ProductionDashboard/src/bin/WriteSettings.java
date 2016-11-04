/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package bin;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.json.JSONObject;

/**
 *
 * @author AModotti
 */
public class WriteSettings extends HttpServlet {

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
        
        String configuration = request.getParameter("configuration");
        
        JSONObject record = new JSONObject();
        
        try {
            
            String ipAddress = request.getHeader("X-FORWARDED-FOR");  
            
            if(ipAddress == null){    
                ipAddress = request.getRemoteAddr();   
            }
            
            if(ipAddress.equals("0:0:0:0:0:0:0:1")){
                ipAddress = "LocalHost";
            }
            
            String filename = ipAddress +"_Settings.zip";
            
            File file = new File(this.getServletContext().getRealPath("/configurationfiles/" + filename));
                       
            if(file.exists()){
                file.delete();
            } 
            
            FileOutputStream fos = new FileOutputStream(file);
            PrintWriter fw = new PrintWriter(fos); 
            
            fw.println(configuration);
            fw.close();
            fos.close();
            
            record.put("file", file);
            record.put("filename", filename);
            
            out.println(record);

            out.close();
            
        }catch(Exception Ex) {

            out.print(Ex.getMessage());

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
