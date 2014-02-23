require 'mail'

class SubscribedConfirmation
	@queue = :subscribed_queue

	def self.perform(mail_data)
		# system("echo 'hello #{mail}' > /Users/aero/crime-spotter/CONFIRMED")

   log = Logger.new 'log/resque.log'
   log.debug "starting to send email."
    data = { :to => 'levipr@gmail.com', 
             :from => 'crimespotterpr@gmail.com',
             :subject => "Reporte Mensual",
             :text => 'A continuación su reporte mensual para su vecindad:',
             :html => '<b>Aqui va la grafica</b>'
           }
    result = self.send_mail(data)
    log.debug "sent email, with result: #{result}"    
	end
	
	def self.send_mail(data)
          Mail.defaults do
            delivery_method :smtp, { :address   => "smtp.mandrillapp.com",
                                     :port      => 587,
                                     :user_name => "aacv@alberti.co",
                                     :password  => "rHD3bC8vFPpp2MuwuYG3SQ",
                                     :authentication => 'plain',
                                     :enable_starttls_auto => true }
          end
          # data hash:
          # to
          # from
          # subject
          # text
          # html
          mail = Mail.deliver do
            to "#{data[:to]}"
            from "#{data[:from]}"
            subject "#{data[:subject]}"
            text_part do
              body "#{data[:text]}"
            end
            html_part do
              content_type 'text/html; charset=UTF-8'
              body "#{data[:html]}"
            end     
          end
	end

end
