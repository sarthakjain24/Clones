//
//  ProfileView.swift
//  TwitterClone
//
//  Created by SARTHAK JAIN on 7/22/22.
//

import SwiftUI

struct ProfileView: View {
    var body: some View {
        VStack{
            ZStack(alignment: .bottomLeading){
                Color(.systemBlue)
                    .ignoresSafeArea()
            
                VStack{
                    Button{
                        
                    } label: {
                        Image(systemName: "arrow.left")
                            .resizable()
                            .frame(width: 20, height: 16)
                            .foregroundColor(.white)
                            .offset(x: 16, y: 12)
                    }
                }
                
                
                
                Circle()
                    .frame(width: 72, height: 72)
                    .offset(x: 16, y: 24)
            }.frame(height: 96)
            
            Spacer()
        }
    }
}

struct ProfileView_Previews: PreviewProvider {
    static var previews: some View {
        ProfileView()
    }
}
