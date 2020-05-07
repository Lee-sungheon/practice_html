

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Enumeration;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class ChoiceDogServlet
 */
@WebServlet("/choiceDog")
public class ChoiceDogServlet2 extends HttpServlet {
	private static final long serialVersionUID = 1L;
  
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html;charset=euc-kr");
		PrintWriter out = response.getWriter();
		
		Enumeration<String> enu = request.getParameterNames();
		while(enu.hasMoreElements()) {
			String name = enu.nextElement();
			String[] arr = request.getParameterValues(name);
			out.println("<html>");
			out.println("<head>");
			out.println("</head>");
			out.println("<body bg color='black'>");
			for(String value:arr) {
				if(name.equals("dog")) {
					out.println("<img src='"+value+"'/>");
				}
				else {
					out.println("키: " + name + ", 값: " + value);					
				}
			}
			out.println("</body>");
			out.println("</html>");
			
		}
		
//		String[] dog = request.getParameterValues("dog");
//		out.println("<html>");
//		out.println("<head>");
//		out.println("</head>");
//		out.println("<body bg color='black'>");
//		out.println("<table align='center' bgcolor='yellow'>");
//		out.println("<tr>");
//		for(int i=0; i<dog.length; i++) {
//			out.println("<td>");
//			out.println("<img src='"+dog[i]+"'/>");
//			out.println("</td>");
//		}
//		out.println("</tr>");
//		out.println("</table>");
//		out.println("</body>");
//		out.println("</html>");
//		
	}

}
